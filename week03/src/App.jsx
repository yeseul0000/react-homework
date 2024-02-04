import { useState, useEffect } from "react";
import "./App.css";

const API = import.meta.env.VITE_PB_URL;

async function fetchThumbnail(options) {
  try {
    const fetchURL = `${API}/api/collections/landing_animationImg`;
    const response = await fetch(fetchURL, options);

    if (!response.ok) {
      throw new Error(
        `서버 응답이 성공적이지 않습니다. 상태 코드: ${response.status}`
      );
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("올바른 JSON 형식의 응답이 아닙니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}

function GetPbImg({ contents }) {
  return contents?.map((content) => (
    <img key={content.id} src={content.image} alt="" />
  ));
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnailContents, setThumbnailContents] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchThumbnail({ signal: controller.signal }).then((data) => {
      setThumbnailContents(data?.items);
      setIsLoading(false);
    });

    return () => {
      // 네트워크 요청 취소
      controller.abort();
    };
  }, []);

  // const thumbnailContentsLength = thumbnailContents?.length;

  if (isLoading) {
    return <div role="alert">데이터 로딩 중...</div>;
  }

  return (
    <>
      <GetPbImg contents={thumbnailContents} />
    </>
  );
}
export default App;
