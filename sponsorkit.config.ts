import { defineConfig, presets } from 'sponsorkit'

const Solitude_Logo = (width: number, y: number) => `
<a xlink:href="https://github.com/valor-x" class="sponsorkit-link" target="_blank" id="Solitude">
<svg width="167px" height="382px" viewBox="0 0 167 382" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>logo</title>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-6">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-7">
            <stop stop-color="#FECCCC" offset="0%"></stop>
            <stop stop-color="#39BDE4" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="画板" transform="translate(-167, -59)" fill-rule="nonzero">
            <g id="logo" transform="translate(167, 59)">
                <path d="M41.451978,366.819156 C63.2265115,314.167618 167.050853,309.635807 118.99746,228.707504 C153.639423,313.979396 6.78825531,314.963943 26.3287594,382 C12.5619158,361.643046 18.1905094,334.473897 37.7672802,320.255882 C54.8416479,307.145482 77.6751693,304.944731 94.4956701,291.066964 C124.038533,271.079215 120.593196,234.976751 96.7006861,211.861618 C96.0188719,211.181122 95.003404,210.544062 94.0822296,210.449951 C86.4807269,209.660866 78.8719708,208.915216 71.2487081,208.328832 C57.1699707,207.250174 43.5046739,208.806627 30.7315382,215.314771 C27.2426805,217.088403 23.7393162,218.348044 19.8007514,216.943617 C24.2397968,216.06042 28.6425756,215.162745 32.3272735,212.411806 C32.2692467,212.180148 32.2184733,211.948489 32.1604466,211.716831 C29.7523369,212.107754 27.6996411,213.041626 25.1537179,212.940276 C38.187974,204.006961 24.0149432,203.340944 16,204.796046 C43.9108611,184.243631 36.1280248,151.550884 84.6746446,161.273284 C101.270292,126.502854 113.695267,142.798552 133.649212,122 C130.261901,131.816511 125.583495,141.205903 121.347543,150.718363 C116.879484,161.895865 106.790085,163.495754 96.4178058,166.029514 C100.102504,164.921899 101.545919,167.404984 103.352001,169.641932 C129.057846,200.039816 157.962415,234.0284 155.895212,276.356675 C147.234722,323.376027 66.3744621,327.364889 41.451978,366.819156 L41.451978,366.819156 Z M71.3937749,171.88612 C61.1157889,177.641375 44.7957688,175.672282 47.1893718,192.474732 C52.5858584,180.23305 59.8754674,195.001253 71.3937749,171.88612 L71.3937749,171.88612 Z" id="形状" fill="url(#linearGradient-1)"></path>
                <path d="M75.3032249,211.025533 C106.026327,209.673873 112.009852,262.374155 89.125744,277.126764 C55.0225258,300.451933 -10.1418056,326.335859 20.1569835,378.551856 C19.9915736,378.703647 19.8333554,378.848209 19.6679454,379 C-9.82536916,354.648437 3.54407043,308.728139 30.8798638,288.53275 C55.238278,268.041007 100.157869,249.385209 75.3032249,211.025533 Z" id="路径" fill="url(#linearGradient-2)"></path>
                <path d="M131.122758,44.5611246 C140.518488,52.0520972 149.271959,60.2108697 155.377019,71.2803786 C171.087083,44.8006616 152.086349,16.9853448 131.534092,0 C163.329472,16.2086645 181.738463,59.2744981 151.913155,88.0552212 C133.150561,109.533698 83.0400028,127.861901 83.0688683,158 L70,158 C71.5587386,126.468232 104.321114,124.885836 92.9625284,113.344512 C85.81831,103.066201 82.6791837,91.7426379 83.3503072,78.4810034 C93.2511837,128.333716 119.56933,105.577709 144.877183,81.9216245 C153.58014,70.1480222 137.732964,54.0337208 131.122758,44.5683833 L131.122758,44.5611246 Z" id="路径" fill="url(#linearGradient-3)"></path>
                <path d="M62.2292659,56 C43.1451334,63.2999022 18.3176548,75.3501886 23.7278434,99.6686688 C30.7965771,99.1456907 37.8363406,98.6299763 44.876104,98.1069982 C44.9195594,98.4120687 44.9702573,98.7098757 45.0137126,99.0149462 C19.0853656,102.879173 29.4711895,111.580947 43.5145037,123.362481 C55.1822598,131.44685 65.3290794,100.736416 71,93.4946222 C67.581514,101.470038 64.1123302,109.423663 60.7735123,117.428132 C58.0503116,124.916888 53.6395956,131.149043 60.9400911,137.555525 C65.7491476,143.279229 67.4946034,149.874563 66.5313436,157.399637 C62.9680065,158.25674 59.3322439,159.12837 55.6747536,160 C60.3462016,135.11496 44.3763678,137.097919 29.5001597,123.34069 C-1.69352472,93.7706384 26.1903121,58.760162 62.2292659,56 Z" id="路径" fill="url(#linearGradient-4)"></path>
                <path d="M0.00732087227,143 C17.3943925,162.502948 36.3115265,145.13458 47,164.110998 C41.5898754,167.604594 37.7903427,172.386054 35.1401869,178 C21.3476636,175.47408 8.91682243,161.400081 0,143.007115 L0.00732087227,143 Z" id="路径" fill="url(#linearGradient-5)"></path>
                <path d="M29,207.557191 C25.5771332,208.185531 23.8692728,211.545785 20.9966372,212.980039 C16.6591005,213.184933 12.6502732,211.853125 12,207.092765 C17.6309374,206.703468 22.740227,206.355149 27.8495166,206 L29,207.550361 L29,207.557191 Z" id="路径" fill="url(#linearGradient-6)"></path>
                <path d="M66,177 C60.2942272,179.492077 52.7486034,178.10342 50,186 C56.264432,184.566305 62.8193669,184.123436 66,177 Z" id="路径" fill="url(#linearGradient-7)"></path>
            </g>
        </g>
    </g>
</svg>
</a>
`

export default defineConfig({
  includePrivate: true,
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: presets.medium,
      composeAfter: (composer, _tierSponsors, _config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose, _, config) {
        if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
          compose.addSpan(20).addText('Special Sponsor', 'sponsorkit-tier-title').addSpan(10).addRaw(Solitude_Logo(config.width!, compose.height)).addSpan(130)
        }
      },
    },
  ],
})