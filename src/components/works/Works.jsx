import "./works.scss";
import {PhoneIphoneRounded, ArrowBackIosRounded, ArrowForwardIosRounded, Public, Notes} from '@material-ui/icons';
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: <PhoneIphoneRounded />,
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: <Public />,
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: <Notes />,
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

    const handleClick = (way)=> {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            {data.map(d=>(
                <div className="container">
                    
                        <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {d.icon}
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
            ))}

            </div>
            <ArrowBackIosRounded className="arrow left" onClick={()=>handleClick('left')}/>
            <ArrowForwardIosRounded className="arrow right" onClick={()=>handleClick()}/>


        </div>
    )
}
