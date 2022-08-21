import React from 'react';
import Sidebar from '../components/Sidebar';
import ContentPane from '../components/ContentPane';
import Attendees from '../components/Attendees';
import Widget from '../components/Widget';
import { useParams } from 'react-router-dom';
export default function Events({ lists }) {
  let { id } = useParams();
  const filterlist = lists.filter((item) => {
    return item.id == id;
  });

  return (
    <div>
      {filterlist &&
        filterlist.map((item) => {
          return (
            <div>
              <div>{item.title}</div>
              <div>
                <div>img Hosted By</div>
                {item.hostedby}
              </div>
              <hr />
              <div>
                <h3>Details</h3>
              </div>
              <div>WEBINAR LINK:{item.link}</div>
              <div>{item.topic}</div>
              <div>
                <h3>Attendees</h3>
                <Attendees />
              </div>
              <div>
                <h3>Similar events nearby</h3>
                <Widget lists={lists} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
