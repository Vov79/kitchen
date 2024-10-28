"use client"
import logo from "@images/Croitoru_Logo.svg"
import Image from "next/image"
import { useState } from "react"
import Link from 'next/link'


export default function Header() {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show)
    }


return <header className="header">
    <div className="header__inner">
        <Link href="/">
            <Image className="header__inner-logo" src={logo} alt="" srcset="" />
        </Link>
        <div className="header__inner-navs">
            <Link className="header__inner-link" href="/">Acasă</Link>
            <a className="header__inner-link" href="/bucatarii">Bucătării</a>
            <a className="header__inner-link">Showroom-uri</a>
        </div>
        <div className="header__inner-info">
            <Link className="header__inner-link" href="tel:37361039797">+373 61 03 97 97</Link>
            <div className="header__inner-links">
                <a href="">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.97376 5.1515C5.83437 5.13121 5.69223 5.15927 5.57101 5.231H5.56051C5.27926 5.396 5.02576 5.60375 4.80976 5.84825C4.62976 6.056 4.53226 6.266 4.50676 6.4685C4.49176 6.5885 4.50226 6.71 4.53751 6.82475L4.55101 6.83225C4.75351 7.427 5.01751 7.99925 5.34001 8.53775C5.75585 9.29412 6.26758 9.99365 6.86251 10.619L6.88051 10.6445L6.90901 10.6655L6.92626 10.6858L6.94726 10.7037C7.5748 11.3005 8.27597 11.8146 9.03376 12.2338C9.90001 12.7055 10.4258 12.9282 10.7415 13.0212V13.0258C10.8338 13.0542 10.9178 13.067 11.0025 13.067C11.2714 13.0471 11.5259 12.9378 11.7255 12.7565C11.9693 12.5405 12.1755 12.2863 12.336 12.0035V11.9983C12.4868 11.7133 12.4358 11.4448 12.2183 11.2625C11.7814 10.8808 11.309 10.5417 10.8075 10.25C10.4715 10.0677 10.1303 10.178 9.99226 10.3625L9.69751 10.7345C9.54601 10.919 9.27151 10.8935 9.27151 10.8935L9.26401 10.898C7.21576 10.3753 6.66901 8.3015 6.66901 8.3015C6.66901 8.3015 6.64351 8.0195 6.83326 7.8755L7.20226 7.5785C7.37926 7.4345 7.50226 7.094 7.31251 6.758C7.02271 6.25607 6.68434 5.78381 6.30226 5.348C6.21893 5.24543 6.10206 5.17558 5.97226 5.15075L5.97376 5.1515ZM9.43501 4.25C9.33555 4.25 9.24017 4.28951 9.16984 4.35984C9.09952 4.43016 9.06001 4.52554 9.06001 4.625C9.06001 4.72446 9.09952 4.81984 9.16984 4.89016C9.24017 4.96049 9.33555 5 9.43501 5C10.383 5 11.1705 5.30975 11.7938 5.90375C12.114 6.2285 12.3638 6.61325 12.5273 7.03475C12.6915 7.457 12.7665 7.90775 12.747 8.35925C12.7428 8.45871 12.7783 8.55575 12.8457 8.62903C12.9131 8.70231 13.0068 8.74582 13.1063 8.75C13.2057 8.75418 13.3028 8.71867 13.376 8.6513C13.4493 8.58393 13.4928 8.49021 13.497 8.39075C13.5203 7.83536 13.4281 7.28119 13.2263 6.76325C13.0236 6.24285 12.7162 5.76959 12.3233 5.37275L12.3158 5.36525C11.5425 4.6265 10.5645 4.25 9.43501 4.25Z" fill="white"/>
                        <path d="M9.40918 5.48293C9.30972 5.48293 9.21434 5.52244 9.14401 5.59276C9.07369 5.66309 9.03418 5.75847 9.03418 5.85793C9.03418 5.95738 9.07369 6.05277 9.14401 6.12309C9.21434 6.19342 9.30972 6.23293 9.40918 6.23293H9.42193C10.1059 6.28168 10.6039 6.50968 10.9527 6.88393C11.3104 7.26943 11.4957 7.74868 11.4814 8.34118C11.4791 8.44063 11.5165 8.53693 11.5852 8.60887C11.6539 8.68081 11.7483 8.72252 11.8478 8.7248C11.9473 8.72709 12.0436 8.68977 12.1155 8.62107C12.1874 8.55236 12.2291 8.45788 12.2314 8.35843C12.2494 7.58068 11.9989 6.90943 11.5024 6.37393V6.37243C10.9947 5.82793 10.2979 5.53993 9.45943 5.48368L9.44668 5.48218L9.40918 5.48293Z" fill="white"/>
                        <path d="M9.39447 6.73924C9.34429 6.73482 9.29372 6.74055 9.2458 6.75609C9.19788 6.77164 9.15358 6.79668 9.11555 6.82972C9.07752 6.86277 9.04654 6.90313 9.02446 6.94842C9.00237 6.9937 8.98964 7.04297 8.98702 7.09328C8.9844 7.14359 8.99194 7.19392 9.0092 7.24125C9.02646 7.28858 9.05308 7.33195 9.08746 7.36877C9.12185 7.40559 9.16331 7.4351 9.20936 7.45554C9.2554 7.47598 9.3051 7.48693 9.35547 7.48774C9.66897 7.50424 9.86922 7.59874 9.99522 7.72549C10.122 7.85299 10.2165 8.05774 10.2337 8.37799C10.2347 8.42832 10.2457 8.47794 10.2662 8.5239C10.2868 8.56986 10.3163 8.61122 10.3532 8.64551C10.39 8.67981 10.4334 8.70633 10.4807 8.72351C10.528 8.74069 10.5783 8.74816 10.6285 8.74549C10.6788 8.74282 10.728 8.73006 10.7732 8.70797C10.8185 8.68588 10.8588 8.65491 10.8918 8.61691C10.9248 8.57891 10.9498 8.53465 10.9653 8.48677C10.9809 8.4389 10.9866 8.38838 10.9822 8.33824C10.9582 7.88824 10.8172 7.49074 10.5285 7.19824C10.2382 6.90574 9.84297 6.76324 9.39447 6.73924Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30023 2.28804C7.68678 1.75457 10.1617 1.75457 12.5482 2.28804L12.8025 2.34429C13.5001 2.50026 14.1409 2.84659 14.6535 3.34481C15.1662 3.84303 15.5307 4.47363 15.7065 5.16654C16.3123 7.55371 16.3123 10.0544 15.7065 12.4415C15.5307 13.1345 15.1662 13.7651 14.6535 14.2633C14.1409 14.7615 13.5001 15.1078 12.8025 15.2638L12.5475 15.32C11.0527 15.6543 9.51897 15.7802 7.98973 15.6943L5.99998 17.4748C5.92496 17.542 5.8333 17.5878 5.73454 17.6074C5.63579 17.6271 5.53358 17.6198 5.43856 17.5865C5.34355 17.5532 5.25923 17.495 5.1944 17.4179C5.12956 17.3409 5.0866 17.2479 5.06998 17.1485L4.74073 15.182C4.10937 14.9856 3.53894 14.6305 3.08396 14.1507C2.62898 13.6709 2.30465 13.0824 2.14198 12.4415C1.53617 10.0544 1.53617 7.55371 2.14198 5.16654C2.31779 4.47363 2.68228 3.84303 3.19493 3.34481C3.70758 2.84659 4.34833 2.50026 5.04598 2.34429L5.30023 2.28804ZM12.303 3.38529C10.0779 2.8879 7.77052 2.8879 5.54548 3.38529L5.29048 3.44229C4.79602 3.55304 4.34193 3.79866 3.97864 4.15189C3.61534 4.50512 3.35706 4.95214 3.23248 5.44329C2.67276 7.64884 2.67276 9.95925 3.23248 12.1648C3.35712 12.656 3.61551 13.1031 3.97895 13.4564C4.34238 13.8096 4.79663 14.0552 5.29123 14.1658L5.35873 14.1808C5.46792 14.2052 5.56736 14.2616 5.64431 14.3429C5.72126 14.4241 5.77224 14.5264 5.79073 14.6368L6.01123 15.9553L7.41523 14.699C7.4713 14.6487 7.5369 14.6102 7.60815 14.5857C7.67939 14.5612 7.75483 14.5513 7.82998 14.5565C9.32928 14.6629 10.8361 14.5505 12.303 14.2228L12.5572 14.1658C13.0518 14.0552 13.5061 13.8096 13.8695 13.4564C14.2329 13.1031 14.4913 12.656 14.616 12.1648C15.1755 9.95979 15.1755 7.64904 14.616 5.44329C14.4913 4.95204 14.2329 4.50496 13.8695 4.15172C13.5061 3.79848 13.0518 3.55291 12.5572 3.44229L12.303 3.38529Z" fill="white"/>
                    </svg>
                </a>
                <a href="">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2871 4.18254C13.5995 3.48799 12.7805 2.9373 11.8778 2.56258C10.9752 2.18787 10.0069 1.99664 9.02961 2.00004C4.93461 2.00004 1.59711 5.33754 1.59711 9.43254C1.59711 10.745 1.94211 12.02 2.58711 13.145L1.53711 17L5.47461 15.965C6.56211 16.5575 7.78461 16.8725 9.02961 16.8725C13.1246 16.8725 16.4621 13.535 16.4621 9.44004C16.4621 7.45254 15.6896 5.58504 14.2871 4.18254ZM9.02961 15.6125C7.91961 15.6125 6.83211 15.3125 5.87961 14.75L5.65461 14.615L3.31461 15.23L3.93711 12.95L3.78711 12.7175C3.17042 11.7328 2.84296 10.5945 2.84211 9.43254C2.84211 6.02754 5.61711 3.25254 9.02211 3.25254C10.6721 3.25254 12.2246 3.89754 13.3871 5.06754C13.9627 5.64052 14.4189 6.32204 14.7292 7.07261C15.0394 7.82319 15.1976 8.62788 15.1946 9.44004C15.2096 12.845 12.4346 15.6125 9.02961 15.6125ZM12.4196 10.9925C12.2321 10.9025 11.3171 10.4525 11.1521 10.385C10.9796 10.325 10.8596 10.295 10.7321 10.475C10.6046 10.6625 10.2521 11.0825 10.1471 11.2025C10.0421 11.33 9.92961 11.345 9.74211 11.2475C9.55461 11.1575 8.95461 10.955 8.24961 10.325C7.69461 9.83004 7.32711 9.22254 7.21461 9.03504C7.10961 8.84754 7.19961 8.75004 7.29711 8.65254C7.37961 8.57004 7.48461 8.43504 7.57461 8.33004C7.66461 8.22504 7.70211 8.14254 7.76211 8.02254C7.82211 7.89504 7.79211 7.79004 7.74711 7.70005C7.70211 7.61004 7.32711 6.69504 7.17711 6.32004C7.02711 5.96004 6.86961 6.00504 6.75711 5.99754H6.39711C6.26961 5.99754 6.07461 6.04254 5.90211 6.23004C5.73711 6.41754 5.25711 6.86754 5.25711 7.78254C5.25711 8.69754 5.92461 9.58254 6.01461 9.70254C6.10461 9.83004 7.32711 11.705 9.18711 12.5075C9.62961 12.7025 9.97461 12.815 10.2446 12.8975C10.6871 13.04 11.0921 13.0175 11.4146 12.9725C11.7746 12.92 12.5171 12.5225 12.6671 12.0875C12.8246 11.6525 12.8246 11.285 12.7721 11.2025C12.7196 11.12 12.6071 11.0825 12.4196 10.9925Z" fill="white"/>
                    </svg>
                </a>
                <a href="">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.98874 12.056L11.4202 14.8205C12.3202 15.8442 12.771 16.3565 13.2427 16.2312C13.7137 16.1067 13.8757 15.4332 14.199 14.0855L15.9915 6.60947C16.4902 4.53347 16.7392 3.49622 16.1857 2.98397C15.6322 2.47172 14.673 2.85272 12.7545 3.61397L3.85499 7.14872C2.32049 7.75847 1.55324 8.06297 1.50449 8.58647C1.49875 8.63981 1.49875 8.69362 1.50449 8.74697C1.55174 9.27122 2.31749 9.57797 3.85049 10.1922C4.54424 10.4705 4.89149 10.61 5.14049 10.8762C5.16849 10.9062 5.19549 10.9372 5.22149 10.9692C5.45099 11.2542 5.54849 11.6292 5.74424 12.3762L6.11099 13.7765C6.30074 14.504 6.39599 14.8685 6.64574 14.918C6.89549 14.9675 7.11224 14.666 7.54649 14.0622L8.98874 12.056ZM8.98874 12.056L8.75099 11.8085C8.47949 11.525 8.34374 11.384 8.34374 11.2085C8.34374 11.033 8.47874 10.8912 8.75099 10.6085L11.4307 7.81547" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>    
            </div>
        </div>
        <div  onClick={toggleMenu} className="burger">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.28307 19L20 19M19.9996 12L4 12M20 5L12.9719 5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
    <div  className={`menu ${show && "visible"}` }>
        <div className="menu-links">
        <a className="menu-link" href="">Acasă</a>
        <a className="menu-link" href="">Bucătării</a>
        <a className="menu-link" href="">Showroom-uri</a>
        </div>
        <div className="header__inner-info visible">
            <Link className="header__inner-link" href="tel: +37361039797">+373 61 03 97 97</Link>
            <div className="header__inner-links">
                <a href="">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.97376 5.1515C5.83437 5.13121 5.69223 5.15927 5.57101 5.231H5.56051C5.27926 5.396 5.02576 5.60375 4.80976 5.84825C4.62976 6.056 4.53226 6.266 4.50676 6.4685C4.49176 6.5885 4.50226 6.71 4.53751 6.82475L4.55101 6.83225C4.75351 7.427 5.01751 7.99925 5.34001 8.53775C5.75585 9.29412 6.26758 9.99365 6.86251 10.619L6.88051 10.6445L6.90901 10.6655L6.92626 10.6858L6.94726 10.7037C7.5748 11.3005 8.27597 11.8146 9.03376 12.2338C9.90001 12.7055 10.4258 12.9282 10.7415 13.0212V13.0258C10.8338 13.0542 10.9178 13.067 11.0025 13.067C11.2714 13.0471 11.5259 12.9378 11.7255 12.7565C11.9693 12.5405 12.1755 12.2863 12.336 12.0035V11.9983C12.4868 11.7133 12.4358 11.4448 12.2183 11.2625C11.7814 10.8808 11.309 10.5417 10.8075 10.25C10.4715 10.0677 10.1303 10.178 9.99226 10.3625L9.69751 10.7345C9.54601 10.919 9.27151 10.8935 9.27151 10.8935L9.26401 10.898C7.21576 10.3753 6.66901 8.3015 6.66901 8.3015C6.66901 8.3015 6.64351 8.0195 6.83326 7.8755L7.20226 7.5785C7.37926 7.4345 7.50226 7.094 7.31251 6.758C7.02271 6.25607 6.68434 5.78381 6.30226 5.348C6.21893 5.24543 6.10206 5.17558 5.97226 5.15075L5.97376 5.1515ZM9.43501 4.25C9.33555 4.25 9.24017 4.28951 9.16984 4.35984C9.09952 4.43016 9.06001 4.52554 9.06001 4.625C9.06001 4.72446 9.09952 4.81984 9.16984 4.89016C9.24017 4.96049 9.33555 5 9.43501 5C10.383 5 11.1705 5.30975 11.7938 5.90375C12.114 6.2285 12.3638 6.61325 12.5273 7.03475C12.6915 7.457 12.7665 7.90775 12.747 8.35925C12.7428 8.45871 12.7783 8.55575 12.8457 8.62903C12.9131 8.70231 13.0068 8.74582 13.1063 8.75C13.2057 8.75418 13.3028 8.71867 13.376 8.6513C13.4493 8.58393 13.4928 8.49021 13.497 8.39075C13.5203 7.83536 13.4281 7.28119 13.2263 6.76325C13.0236 6.24285 12.7162 5.76959 12.3233 5.37275L12.3158 5.36525C11.5425 4.6265 10.5645 4.25 9.43501 4.25Z" fill="white"/>
                        <path d="M9.40918 5.48293C9.30972 5.48293 9.21434 5.52244 9.14401 5.59276C9.07369 5.66309 9.03418 5.75847 9.03418 5.85793C9.03418 5.95738 9.07369 6.05277 9.14401 6.12309C9.21434 6.19342 9.30972 6.23293 9.40918 6.23293H9.42193C10.1059 6.28168 10.6039 6.50968 10.9527 6.88393C11.3104 7.26943 11.4957 7.74868 11.4814 8.34118C11.4791 8.44063 11.5165 8.53693 11.5852 8.60887C11.6539 8.68081 11.7483 8.72252 11.8478 8.7248C11.9473 8.72709 12.0436 8.68977 12.1155 8.62107C12.1874 8.55236 12.2291 8.45788 12.2314 8.35843C12.2494 7.58068 11.9989 6.90943 11.5024 6.37393V6.37243C10.9947 5.82793 10.2979 5.53993 9.45943 5.48368L9.44668 5.48218L9.40918 5.48293Z" fill="white"/>
                        <path d="M9.39447 6.73924C9.34429 6.73482 9.29372 6.74055 9.2458 6.75609C9.19788 6.77164 9.15358 6.79668 9.11555 6.82972C9.07752 6.86277 9.04654 6.90313 9.02446 6.94842C9.00237 6.9937 8.98964 7.04297 8.98702 7.09328C8.9844 7.14359 8.99194 7.19392 9.0092 7.24125C9.02646 7.28858 9.05308 7.33195 9.08746 7.36877C9.12185 7.40559 9.16331 7.4351 9.20936 7.45554C9.2554 7.47598 9.3051 7.48693 9.35547 7.48774C9.66897 7.50424 9.86922 7.59874 9.99522 7.72549C10.122 7.85299 10.2165 8.05774 10.2337 8.37799C10.2347 8.42832 10.2457 8.47794 10.2662 8.5239C10.2868 8.56986 10.3163 8.61122 10.3532 8.64551C10.39 8.67981 10.4334 8.70633 10.4807 8.72351C10.528 8.74069 10.5783 8.74816 10.6285 8.74549C10.6788 8.74282 10.728 8.73006 10.7732 8.70797C10.8185 8.68588 10.8588 8.65491 10.8918 8.61691C10.9248 8.57891 10.9498 8.53465 10.9653 8.48677C10.9809 8.4389 10.9866 8.38838 10.9822 8.33824C10.9582 7.88824 10.8172 7.49074 10.5285 7.19824C10.2382 6.90574 9.84297 6.76324 9.39447 6.73924Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30023 2.28804C7.68678 1.75457 10.1617 1.75457 12.5482 2.28804L12.8025 2.34429C13.5001 2.50026 14.1409 2.84659 14.6535 3.34481C15.1662 3.84303 15.5307 4.47363 15.7065 5.16654C16.3123 7.55371 16.3123 10.0544 15.7065 12.4415C15.5307 13.1345 15.1662 13.7651 14.6535 14.2633C14.1409 14.7615 13.5001 15.1078 12.8025 15.2638L12.5475 15.32C11.0527 15.6543 9.51897 15.7802 7.98973 15.6943L5.99998 17.4748C5.92496 17.542 5.8333 17.5878 5.73454 17.6074C5.63579 17.6271 5.53358 17.6198 5.43856 17.5865C5.34355 17.5532 5.25923 17.495 5.1944 17.4179C5.12956 17.3409 5.0866 17.2479 5.06998 17.1485L4.74073 15.182C4.10937 14.9856 3.53894 14.6305 3.08396 14.1507C2.62898 13.6709 2.30465 13.0824 2.14198 12.4415C1.53617 10.0544 1.53617 7.55371 2.14198 5.16654C2.31779 4.47363 2.68228 3.84303 3.19493 3.34481C3.70758 2.84659 4.34833 2.50026 5.04598 2.34429L5.30023 2.28804ZM12.303 3.38529C10.0779 2.8879 7.77052 2.8879 5.54548 3.38529L5.29048 3.44229C4.79602 3.55304 4.34193 3.79866 3.97864 4.15189C3.61534 4.50512 3.35706 4.95214 3.23248 5.44329C2.67276 7.64884 2.67276 9.95925 3.23248 12.1648C3.35712 12.656 3.61551 13.1031 3.97895 13.4564C4.34238 13.8096 4.79663 14.0552 5.29123 14.1658L5.35873 14.1808C5.46792 14.2052 5.56736 14.2616 5.64431 14.3429C5.72126 14.4241 5.77224 14.5264 5.79073 14.6368L6.01123 15.9553L7.41523 14.699C7.4713 14.6487 7.5369 14.6102 7.60815 14.5857C7.67939 14.5612 7.75483 14.5513 7.82998 14.5565C9.32928 14.6629 10.8361 14.5505 12.303 14.2228L12.5572 14.1658C13.0518 14.0552 13.5061 13.8096 13.8695 13.4564C14.2329 13.1031 14.4913 12.656 14.616 12.1648C15.1755 9.95979 15.1755 7.64904 14.616 5.44329C14.4913 4.95204 14.2329 4.50496 13.8695 4.15172C13.5061 3.79848 13.0518 3.55291 12.5572 3.44229L12.303 3.38529Z" fill="white"/>
                    </svg>
                </a>
                <a href="">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2871 4.18254C13.5995 3.48799 12.7805 2.9373 11.8778 2.56258C10.9752 2.18787 10.0069 1.99664 9.02961 2.00004C4.93461 2.00004 1.59711 5.33754 1.59711 9.43254C1.59711 10.745 1.94211 12.02 2.58711 13.145L1.53711 17L5.47461 15.965C6.56211 16.5575 7.78461 16.8725 9.02961 16.8725C13.1246 16.8725 16.4621 13.535 16.4621 9.44004C16.4621 7.45254 15.6896 5.58504 14.2871 4.18254ZM9.02961 15.6125C7.91961 15.6125 6.83211 15.3125 5.87961 14.75L5.65461 14.615L3.31461 15.23L3.93711 12.95L3.78711 12.7175C3.17042 11.7328 2.84296 10.5945 2.84211 9.43254C2.84211 6.02754 5.61711 3.25254 9.02211 3.25254C10.6721 3.25254 12.2246 3.89754 13.3871 5.06754C13.9627 5.64052 14.4189 6.32204 14.7292 7.07261C15.0394 7.82319 15.1976 8.62788 15.1946 9.44004C15.2096 12.845 12.4346 15.6125 9.02961 15.6125ZM12.4196 10.9925C12.2321 10.9025 11.3171 10.4525 11.1521 10.385C10.9796 10.325 10.8596 10.295 10.7321 10.475C10.6046 10.6625 10.2521 11.0825 10.1471 11.2025C10.0421 11.33 9.92961 11.345 9.74211 11.2475C9.55461 11.1575 8.95461 10.955 8.24961 10.325C7.69461 9.83004 7.32711 9.22254 7.21461 9.03504C7.10961 8.84754 7.19961 8.75004 7.29711 8.65254C7.37961 8.57004 7.48461 8.43504 7.57461 8.33004C7.66461 8.22504 7.70211 8.14254 7.76211 8.02254C7.82211 7.89504 7.79211 7.79004 7.74711 7.70005C7.70211 7.61004 7.32711 6.69504 7.17711 6.32004C7.02711 5.96004 6.86961 6.00504 6.75711 5.99754H6.39711C6.26961 5.99754 6.07461 6.04254 5.90211 6.23004C5.73711 6.41754 5.25711 6.86754 5.25711 7.78254C5.25711 8.69754 5.92461 9.58254 6.01461 9.70254C6.10461 9.83004 7.32711 11.705 9.18711 12.5075C9.62961 12.7025 9.97461 12.815 10.2446 12.8975C10.6871 13.04 11.0921 13.0175 11.4146 12.9725C11.7746 12.92 12.5171 12.5225 12.6671 12.0875C12.8246 11.6525 12.8246 11.285 12.7721 11.2025C12.7196 11.12 12.6071 11.0825 12.4196 10.9925Z" fill="white"/>
                    </svg>
                </a>
                <a href="">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.98874 12.056L11.4202 14.8205C12.3202 15.8442 12.771 16.3565 13.2427 16.2312C13.7137 16.1067 13.8757 15.4332 14.199 14.0855L15.9915 6.60947C16.4902 4.53347 16.7392 3.49622 16.1857 2.98397C15.6322 2.47172 14.673 2.85272 12.7545 3.61397L3.85499 7.14872C2.32049 7.75847 1.55324 8.06297 1.50449 8.58647C1.49875 8.63981 1.49875 8.69362 1.50449 8.74697C1.55174 9.27122 2.31749 9.57797 3.85049 10.1922C4.54424 10.4705 4.89149 10.61 5.14049 10.8762C5.16849 10.9062 5.19549 10.9372 5.22149 10.9692C5.45099 11.2542 5.54849 11.6292 5.74424 12.3762L6.11099 13.7765C6.30074 14.504 6.39599 14.8685 6.64574 14.918C6.89549 14.9675 7.11224 14.666 7.54649 14.0622L8.98874 12.056ZM8.98874 12.056L8.75099 11.8085C8.47949 11.525 8.34374 11.384 8.34374 11.2085C8.34374 11.033 8.47874 10.8912 8.75099 10.6085L11.4307 7.81547" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>    
            </div>
        </div>
        
        
        
    </div>
</header>

}