import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SmallFooter = props => {
  return (
    <div className="small-footer">
      <div className="small-footer__top">
        <h1>Have a question? We've got some answers.</h1>
        <button>Go to Help Center</button>
        <div className="small-footer__top__energy">
          <img src={window.energy}/>
          <h2>Plantsy is powered by 100% renewable electricity.</h2>
        </div>
      </div>
      <div className="small-footer__bottom">
        <div className="us-details cart-footer__top-left">
          <img src={window.usa} />
          <h1>United States</h1>
          <h2>English (US)</h2>
          <h3>$ (USD)</h3>
        </div>

        <div className="small-footer__middle__social-links">
          <a target="_blank" href="https://github.com/kingbloopy" className="github">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50px" height="50px"><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z" /><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z" /><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z" /><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z" /><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z" /><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z" /><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z" /><g><path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z" /><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z" /></g><g><path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z" /></g><g><path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z" /></g><g><path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z" /></g><g><path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z" /><path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z" /></g><g><path fill="#fefdef" d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93" /><path fill="#472b29" d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z" /></g><g><path fill="#fefdef" d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342" /><path fill="#472b29" d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z" /></g><g><path fill="#fefdef" d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055" /><path fill="#472b29" d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z" /></g></svg>
          </a>
          <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/maggie-mcdonald-321b4021b/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50px" height="50px"><path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z" /><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z" /><path fill="#fce0a2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z" /><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z" /><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z" /><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z" /><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z" /><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z" /><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z" /><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z" /><g><path fill="#127ad8" d="M35,72.3c-4,0-7.3-3.3-7.3-7.3V35c0-4,3.3-7.3,7.3-7.3h30c4,0,7.3,3.3,7.3,7.3v30c0,4-3.3,7.3-7.3,7.3H35z" /><path fill="#472b29" d="M65,28.4c3.6,0,6.6,3,6.6,6.6v30c0,3.6-3,6.6-6.6,6.6H35c-3.6,0-6.6-3-6.6-6.6V35c0-3.6,3-6.6,6.6-6.6H65 M65,27H35c-4.4,0-8,3.6-8,8v30c0,4.4,3.6,8,8,8h30c4.4,0,8-3.6,8-8V35C73,30.6,69.4,27,65,27L65,27z" /></g><g><path fill="#fdfcee" d="M63.6,68.5H36.5c-2.7,0-4.8-2.2-4.8-4.8V36.3c0-2.7,2.2-4.8,4.8-4.8h27.1c2.7,0,4.8,2.2,4.8,4.8v27.3 C68.4,66.3,66.3,68.5,63.6,68.5z" /></g><g><path fill="#472b29" d="M68.5,47.4c-0.3,0-0.5-0.2-0.5-0.5V43c0-0.3,0.2-0.5,0.5-0.5S69,42.7,69,43v3.9C69,47.2,68.8,47.4,68.5,47.4z" /></g><g><path fill="#472b29" d="M68.5,40.5c-0.3,0-0.5-0.2-0.5-0.5v-2c0-0.3,0.2-0.5,0.5-0.5S69,37.7,69,38v2C69,40.3,68.8,40.5,68.5,40.5z" /></g><g><path fill="#472b29" d="M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V49.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z" /></g><g><path fill="#127ad8" d="M60.5,51.6v6.9h-4.1l-0.1-6.9c0-1.7-0.8-3-2.4-3c-1.2,0-1.9,0.8-2.2,1.6c-0.1,0.3-0.1,0.7-0.1,1v7.2h-4.2 c0,0,0.1-11.7,0-12.9h4.2v2c0,0,0,0,0,0h0v0c0.6-1,1.6-2.1,3.9-2.1C58.4,45.5,60.5,47.3,60.5,51.6z" /><path fill="#472b29" d="M60.5,59h-4.1c-0.3,0-0.5-0.2-0.5-0.5l-0.1-6.9c0-0.7-0.2-2.5-1.9-2.5c-1.1,0-1.6,0.9-1.8,1.3 c0,0.1-0.1,0.4-0.1,0.9v7.2c0,0.3-0.2,0.5-0.5,0.5h-4.2c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.1,0.1-11.7,0-12.9 c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.4-0.2h4.2c0.3,0,0.5,0.2,0.5,0.5v0.6c0.9-0.8,2-1.2,3.4-1.2c1.6,0,2.8,0.5,3.8,1.4 c1.1,1.1,1.7,2.9,1.7,5.2v6.9C61,58.8,60.8,59,60.5,59z M56.9,58H60v-6.4c0-2-0.5-3.5-1.4-4.5c-0.7-0.7-1.8-1.1-3-1.1 c-2.1,0-3,1-3.5,1.8c-0.2,0.4-0.7,0.4-0.9,0.1c-0.1-0.1-0.1-0.3,0-0.4v-1.4h-3.2c0,2.2,0,9.9,0,11.9h3.2v-6.7 c0-0.5,0.1-0.9,0.2-1.2c0.5-1.2,1.5-1.9,2.7-1.9c1.8,0,2.9,1.3,2.9,3.5L56.9,58z" /></g><g><path fill="#127ad8" d="M42.4,39.8c-1.2,0-2,0.8-2,2c0,1.1,0.8,2,2,2h0c1.3,0,2-0.9,2-2C44.4,40.6,43.6,39.8,42.4,39.8z" /><path fill="#472b29" d="M42.4,44.2c-1.5,0-2.5-1-2.5-2.5s1.1-2.5,2.5-2.5c1.4,0,2.5,1,2.5,2.4C44.9,43.2,43.8,44.2,42.4,44.2z M42.4,40.3c-0.9,0-1.5,0.6-1.5,1.5c0,0.9,0.6,1.5,1.5,1.5c0.9,0,1.6-0.6,1.6-1.5C43.9,40.9,43.3,40.3,42.4,40.3z" /></g><g><path fill="#127ad8" d="M40.4 45.6H44.6V58.5H40.4z" /><path fill="#472b29" d="M44.6,59h-4.2c-0.3,0-0.5-0.2-0.5-0.5V45.6c0-0.3,0.2-0.5,0.5-0.5h4.2c0.3,0,0.5,0.2,0.5,0.5v12.9 C45.1,58.8,44.9,59,44.6,59z M40.9,58h3.2V46.1h-3.2V58z" /></g></svg>
          </a>
          <a target="_blank" href="https://github.com/kingbloopy" className="portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50px" height="50px"><circle cx="14" cy="26" r="2" fill="#ee3e54" /><circle cx="17" cy="78" r="4" fill="#fbcd59" /><circle cx="24" cy="83" r="2" fill="#ee3e54" /><circle cx="64.483" cy="78.517" r="2.483" fill="#fff" /><circle cx="16" cy="48" r="1" fill="#fff" /><circle cx="78" cy="14" r="1" fill="#f1bc19" /><circle cx="50" cy="50" r="38" fill="#f9dbd2" /><circle cx="84" cy="16" r="4" fill="#f1bc19" /><circle cx="78" cy="77" r="2" fill="#fbcd59" /><circle cx="86" cy="31" r="1" fill="#f1bc19" /><circle cx="84" cy="45" r="2" fill="#fff" /><path fill="#edf7f5" d="M70.797,29.086l0.009-0.009c-0.047-0.046-0.1-0.087-0.149-0.132 c-0.008-0.007-0.015-0.016-0.022-0.023l-0.001,0.001C69.338,27.733,67.617,27,65.719,27h-7.008h-0.326H45.143h-0.93h-9.932 C30.26,27,27,30.26,27,34.281v9.932v0.93v13.242v0.326v7.008c0,1.898,0.734,3.618,1.923,4.914l-0.002,0.002 c0.01,0.011,0.021,0.02,0.031,0.031c0.043,0.046,0.081,0.095,0.125,0.14l0.009-0.009C30.407,72.15,32.24,73,34.281,73h6.447h0.326 h13.448h0.724h10.493C69.74,73,73,69.74,73,65.719V55.226v-0.724V41.054v-0.326v-6.447C73,32.24,72.15,30.407,70.797,29.086z" /><path fill="#472b29" d="M53.734,69.5c0,0.276,0.224,0.5,0.5,0.5h10.433C67.607,70,70,67.607,70,64.667v-14 c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v14C69,67.057,67.056,69,64.667,69H54.234C53.958,69,53.734,69.224,53.734,69.5z" /><path fill="#472b29" d="M30,58.417v6.25C30,67.607,32.393,70,35.333,70h8.816c0.276,0,0.5-0.224,0.5-0.5 s-0.224-0.5-0.5-0.5h-8.816C32.944,69,31,67.057,31,64.667v-6.25c0-0.276-0.224-0.5-0.5-0.5S30,58.141,30,58.417z" /><path fill="#472b29" d="M30,35.333v19.75c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-19.75 C31,32.943,32.944,31,35.333,31H46c0.276,0,0.5-0.224,0.5-0.5S46.276,30,46,30H35.333C32.393,30,30,32.393,30,35.333z" /><path fill="#472b29" d="M57.628,30.5c0,0.276,0.224,0.5,0.5,0.5h6.539C67.056,31,69,32.943,69,35.333v2.75 c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2.75C70,32.393,67.607,30,64.667,30h-6.539C57.852,30,57.628,30.224,57.628,30.5z" /><path fill="#472b29" d="M69,41.5v6.25c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V41.5c0-0.276-0.224-0.5-0.5-0.5 S69,41.224,69,41.5z" /><path fill="#472b29" d="M65.917,74H34.079c-4.457,0-8.083-3.623-8.083-8.078V34.103c0-4.454,3.626-8.078,8.083-8.078 h31.838c4.457,0,8.083,3.623,8.083,8.078v31.819C74,70.377,70.374,74,65.917,74z M34.079,27.442 c-3.675,0-6.665,2.988-6.665,6.661v31.819c0,3.673,2.99,6.661,6.665,6.661h31.838c3.675,0,6.665-2.988,6.665-6.661V34.103 c0-3.673-2.99-6.661-6.665-6.661L34.079,27.442z" /><g><path fill="#218af2" d="M62.379,41.642H45.794c-0.265,0-0.52-0.105-0.707-0.293l-1.121-1.121 c-0.375-0.375-0.884-0.586-1.414-0.586H37.38c-1.105,0-2,0.895-2,2v3.959l29-0.046v-1.914 C64.379,42.537,63.484,41.642,62.379,41.642z" /></g><g><path fill="#218af2" d="M64.377,55.025v4.264c0,1.296-0.89,2.356-2,2.356h-25c-1.1,0-2-1.06-2-2.356v-4.264H64.377z" /></g><g><path fill="#1fb0f7" d="M64.073,50.025v6.041c0,0.552-0.448,1-1,1H36.681c-0.552,0-1-0.448-1-1v-6.041H64.073z" /></g><g><path fill="#1dc4fa" d="M64.011,45.513v4.513c0,0.552-0.448,1-1,1H36.742c-0.552,0-1-0.448-1-1v-4.513H64.011z" /></g><g><path fill="#fcfcfc" d="M37.38,45.189v-0.547c0-0.55,0.45-1,1-1h22.986c0.55,0,1,0.45,1,1v0.663L37.38,45.189z" /></g><g><path fill="#472b29" d="M62.366,45.68c-0.207,0-0.375-0.168-0.375-0.375v-0.663c0-0.345-0.28-0.625-0.625-0.625H38.38 c-0.345,0-0.625,0.28-0.625,0.625v0.547c0,0.207-0.168,0.375-0.375,0.375s-0.375-0.168-0.375-0.375v-0.547 c0-0.758,0.617-1.375,1.375-1.375h22.986c0.758,0,1.375,0.617,1.375,1.375v0.663C62.741,45.512,62.573,45.68,62.366,45.68z" /></g><g><path fill="#472b29" d="M64.379,45.778h-29c-0.207,0-0.375-0.168-0.375-0.375s0.168-0.375,0.375-0.375h29 c0.207,0,0.375,0.168,0.375,0.375S64.586,45.778,64.379,45.778z" /></g><g><path fill="#472b29" d="M62.379,62.015h-25c-1.31,0-2.375-1.065-2.375-2.375V41.642c0-1.31,1.065-2.375,2.375-2.375h5.171 c0.636,0,1.232,0.247,1.68,0.696l1.121,1.12c0.116,0.117,0.277,0.184,0.442,0.184h16.585c1.31,0,2.375,1.065,2.375,2.375V59.64 C64.754,60.95,63.689,62.015,62.379,62.015z M37.38,40.017c-0.896,0-1.625,0.729-1.625,1.625V59.64 c0,0.896,0.729,1.625,1.625,1.625h25c0.896,0,1.625-0.729,1.625-1.625V43.642c0-0.896-0.729-1.625-1.625-1.625H45.794 c-0.367,0-0.712-0.143-0.972-0.402L43.7,40.494c-0.306-0.308-0.714-0.477-1.149-0.477H37.38z" /></g></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default connect(null, null)(SmallFooter);