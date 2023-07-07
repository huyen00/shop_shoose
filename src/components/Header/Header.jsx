import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return(
        <React.Fragment>
            <div className="px-5 py-3">
                <div className="flex justify-between">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 p-2.5 ">
                        <option selected>Choose a country</option>
                        <option value="US">VietNamess</option>
                        <option value="US">English</option>                      
                    </select>
                    <ul className="flex">
                        <li className="mx-3">
                            <a href=""><FontAwesomeIcon icon="fa-solid fa-user" />My profile</a>
                        </li>
                        <li className="mx-3">
                            <a href=""><FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                                <p></p>
                            </a>
                        </li>
                        <li className="mx-3">
                            <a href=""><FontAwesomeIcon icon="fa-solid fa-user" />My profile</a>
                        </li>
                        <li className="mx-3">
                            <a href=""><FontAwesomeIcon icon="fa-solid fa-user" />My profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Header;