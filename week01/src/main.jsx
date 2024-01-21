import React from "react";
import ReactDOM from "react-dom/client";

// data
const data ={
    jfamLogo: ['JFAM'],
    seconsHeading: ['회원가입 권유','JFAM에만 있는 재미','내가 찾던 재미','회원가입 권유'],
    anchorMessage: ['지금 가입','로그인'],
    promotionMessage: ['JFAM 오리지널 콘텐츠,\n방송, 영화, 해외시리즈까지!\n재미를 플레이해보세요.','간편하게 가입하고, 원하실 때 해지할 수 있어요.','오리지널 콘텐츠를 만나보세요!\n차별화된 웰메이드 오리지널 콘텐츠','지금 시작해보세요'],
    hrefLink: ['https://jfam.netlify.app/src/pages/signup/','https://jfam.netlify.app/src/pages/login/','/src/assets/jfamLogo.png'],
};

// createApp
const createApp = (data, styles) =>{
    return(    
    <div>
        <header style={styles.header}>
            <h1><img style={styles.h1_jfamLogo} src={data.hrefLink[2]} alt="제이팸 로고" /></h1>
            <div className={styles.div_account}>
                <a style={styles.signup} href={data.hrefLink[0]}>{data.anchorMessage[0]}</a>
                <a style={styles.login} href={data.hrefLink[1]}>{data.anchorMessage[1]}</a>
            </div>
        </header>
        <section style={styles.section_promotion_top}>
            <h2 style={styles.sr_only}>{data.seconsHeading[0]}</h2>
            <p style={styles.p_large}>{data.promotionMessage[0]}</p>
            <p>{data.promotionMessage[1]}</p>
            <a style={styles.callToSignup} href={data.hrefLink[1]}>{data.anchorMessage[1]}</a>
        </section>
        <section>
            <h2>{data.seconsHeading[1]}</h2>
            <p>{data.promotionMessage[2]}</p>
        </section>
        <section>
            <h2 style={styles.sr_only}>{data.seconsHeading[0]}</h2>
            <img style={styles.h1_jfamLogo} src={data.hrefLink[2]} alt="제이팸 로고" />
            <p>{data.promotionMessage[3]}</p>
            <a style={styles.callToSignup} href={data.hrefLink[1]}>{data.anchorMessage[1]}</a>
        </section>
    </div>
    );
};

// styles
const styles = {
    sr_only: {
        'position': 'absolute',
        'width': '1px',
        'height': '1px',
        'padding': '0',
        'margin': '-1px',
        'overflow': 'hidden',
        'white-space': 'nowrap',
        'border-width': '0',
        'clip': 'rect(0, 0, 0, 0)',
    },
    header:{
        'display':'flex',
        'justify-content':'space-between',
        'align-items':'center',
    },
    h1_jfamLogo:{
        'height': '20px',
    },
    signup:{
        "background-color": "#1C358E",
        'border': '1px solid #1C358E',
        'border-radius': '5px',
        'margin': '0 10px',
        'padding' : '2px 5px'
    },
    login:{
        'border': '1px solid white',
        'border-radius': '5px',
        'padding' : '2px 5px'
    },
    p_large:{
        'font-size':'25px',
        'padding':'100px 0 10px 0',
    },
    callToSignup:{
        'margin': '0 auto',
        'color': 'white',
        'display': 'flex',
        'border-radius': '4px',
        'background': 'var(--brand-red-2, #1C358E)',
        'width' : '300px',
        'height' : '35px',
        'margin-top' : '10px',
    },
    section_promotion_top:{
    }
};

// render
ReactDOM.createRoot(document.getElementById("root")).render(createApp(data,styles));