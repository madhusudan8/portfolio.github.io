import react from 'react'
import './Sidenav.css'
import icon from './photos/icon.jpeg'
import { Link } from 'react-router-dom'

const Sidenav = () => {




    return (
        <div>
            <div class="left">
                <div class="icon">
                    <img src={icon} alt="image crashed" />
                    <h3>MADHU</h3>
                </div>


                <div class="navElements">
                    <ul>
                        <div className='divHover'><Link to="/"><li><i class="fas fa-home"></i>Home</li> </Link></div>
                        <div className='divHover'><Link to="/about"><li><i class="far fa-address-card"></i>About</li> </Link></div>
                        <div className='divHover'><Link to="/portfolio"><li><i class="fas fa-briefcase"></i>Skills</li> </Link></div>
                        <div className='divHover'><Link to="/resume"><li><i class="fas fa-file"></i>Resume</li> </Link></div>
                        <div className='divHover'><Link to="/contact"><li><i class="fas fa-envelope"></i>Contact</li> </Link></div>
                    </ul>
                </div>

                <div class="social">

                    <a href="https://www.facebook.com/madhusudan.panigrahi.9041/" target="_blank"> <i class="fab fa-facebook-f" style={{ lineHeight: '2' }}></i></a>
                    <a href="https://github.com/madhusudan8" target="_blank"><i class="fab fa-github" target_blank style={{ lineHeight: '2' }}></i></a>
                    <a href="https://www.youtube.com/channel/UCwrBbjRx6DFUSk51Q_M4QIQ" target="_blank"><i class="fab fa-youtube" style={{ lineHeight: '2' }}></i></a>
                    <a to="https://www.instagram.com/ridicul0uss/" target="_blank"> <i class="fab fa-instagram" style={{ lineHeight: '2' }}></i></a>
                    <a href="https://www.linkedin.com/in/madhusudan-panigrahi-0269a31b8/" target="_blank"><i class="fab fa-linkedin" style={{ lineHeight: '2' }}></i></a>
                    <a href="live:mspsanu8" target="_blank"><i class="fab fa-skype" style={{ lineHeight: '2' }}></i></a>

                </div>
            </div>
        </div>
    )

}

export default Sidenav