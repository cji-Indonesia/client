import React from "react";
import { Link} from "react-router-dom"
import '../css/sidebar.css'

function Sidebar() {





  return (
    <>
    <div class="area"></div>
    <nav class="main-menu">
    <ul>
        <li>
            <Link href="http://justinfarrow.com">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                    Dashboard
                </span>
            </Link>
          
        </li>
        <li class="has-subnav">
            <Link >
                <i class="fa fa-laptop fa-2x"></i>
                <span class="nav-text">
                    Stars Components
                </span>
            </Link>
            
        </li>
        <li class="has-subnav">
            <Link >
               <i class="fa fa-list fa-2x"></i>
                <span class="nav-text">
                    Forms
                </span>
            </Link>
            
        </li>
        <li class="has-subnav">
            <Link >
               <i class="fa fa-folder-open fa-2x"></i>
                <span class="nav-text">
                    Pages
                </span>
            </Link>
           
        </li>
        <li>
            <Link >
                <i class="fa fa-bar-chart-o fa-2x"></i>
                <span class="nav-text">
                    Graphs and Statistics
                </span>
            </Link>
        </li>
        <li>
            <Link >
                <i class="fa fa-font fa-2x"></i>
                <span class="nav-text">
                   Quotes
                </span>
            </Link>
        </li>
        <li>
           <Link >
               <i class="fa fa-table fa-2x"></i>
                <span class="nav-text">
                    Tables
                </span>
            </Link>
        </li>
        <li>
           <Link >
                <i class="fa fa-map-marker fa-2x"></i>
                <span class="nav-text">
                    Maps
                </span>
            </Link>
        </li>
        <li>
            <Link >
               <i class="fa fa-info fa-2x"></i>
                <span class="nav-text">
                    Documentation
                </span>
            </Link>
        </li>
    </ul>


    </nav>
    </>
  );
}

export default Sidebar;