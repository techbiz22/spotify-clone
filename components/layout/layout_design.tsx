/* eslint-disable @next/next/no-img-element */
// import React from 'react'
import classes from './layout.module.css'
import { LayoutContainer } from "./layout_design.styled"
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { MdAdd } from "react-icons/md";


export function MusicCard() {
  return (
    <div className={classes['music-display-card']}>
      <div className={classes['img-cover-holder']}>
        <img src="/images/sh.jpeg" alt="" />
      </div>
      <div className={classes['music-info']}>
        <div>Wasted</div>
        <div>Album . Stephanie</div>
      </div>
    </div>
  )
}


interface Props { }

const LayoutDesignPage: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (

    <div className={classes['container']}>
      <div className={classes['body-view']}>
        <div className={classes['body-view-sidebar']}>

          <div className={classes['sidebar-first-header']}>
            <div className={classes['sb-d']}>
              <div>{<AiFillHome />}</div>
              <div>Home</div>
            </div>

            <div className={classes['sb-d']}>
              <div>{<FiSearch />}</div>
              <div>Search</div>
            </div>

          </div>

          <div className={classes['-sidebar-category-display']}>
            <div className={classes['sidebar-second-header']}>
              <div className={classes['sb-s-h-top']}>
                <div className={classes['sb-collapse']}>
                  <BiLibrary />
                  <div>Your Library</div>
                </div>
                <div className={classes['sb-s-h-top-add']}><MdAdd /></div>
              </div>

              <div className={classes['sb-s-h-category']}>
                <button>Playlist</button>
                <button>Albums</button>
                <button>artists</button>
              </div>


            </div>

            <div className={classes['cat-detail']}>
              {/* add recent and search design here */}
              {
              <>
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              </>
              }
            </div>



          </div>



        </div>
        <div className={classes['body-view-view']}></div>
      </div>

      <div className={classes['bottom-control-bar']}></div>

    </div>

  )
}

export default LayoutDesignPage

