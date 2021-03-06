import React from "react"
import Newscard from "./home/newscard"
import "./home/css/home.css"
import Importantlink from "./home/importantlink"
import Notice from "./home/notice"
import Eventcard from "./home/eventcard"
import { Nitpbackimg } from "./home/nitpimg"
import { Noticelist } from "./home/noticelist"

const Home = () => {
  return (
    <div>
      <div>
        <div className="bgimgwrap">
          <Nitpbackimg />
        </div>
      </div>
      <div className="row tablinkcover">
        <div className="col-4 tablink">
          <a href="#notice">Notice</a>
        </div>
        <div className="col-4 tablink">
          <a href="#events">Events</a>
        </div>
        <div className="col-4 tablink">
          <a href="#news">News</a>
        </div>
      </div>
      <Importantlink />
      <div className="noticewrap" id="notice">
        <div>
          <div
            data-aos="zoom-in"
            data-aos-duration="200"
            className="notice-head"
          >
            Notice
            <p>view all</p>
          </div>
          <div className="notice-row" data-aos="fade-up">
            {Noticelist.map(item => (
              <Notice detail={item.detail} time={item.time} url={item.url} />
            ))}
          </div>
        </div>
        <div id="events">
          <div
            data-aos="zoom-in"
            data-aos-duration="200"
            className="event-head"
          >
            Events
            <p>view all</p>
          </div>
          <div className="event-row" data-aos="fade-up">
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="200"
        className="news-head"
        id="news"
      >
        News
        <p>view all</p>
      </div>

      <div className="news-row">
        <div className="news-viewbox">
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
        </div>
      </div>
    </div>
  )
}

export default Home
