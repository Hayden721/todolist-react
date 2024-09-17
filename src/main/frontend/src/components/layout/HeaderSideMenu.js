import ThemeModeToggle from "../ThemeModeToggle";

const HeaderSideMenu = () => {


    return (
        <div className={'dark:text-white dark:bg-slate-800' }>
            <div className={'table-header-group'}>


                <div className="tabs flex">
                    <div className="flex ">
                        <ul className="flex flex-col bg-gray-100 rounded-2xl transition-all duration-300 p-2 overflow-hidden">
                            <li>
                                <a href="javascript:void(0)"
                                   className="inline-block py-3 px-6 text-gray-500 hover:text-gray-800 font-medium  tab-active:bg-white tab-active:rounded-xl tab-active:text-indigo-600 active tablink whitespace-nowrap"
                                   data-tab="tabs-with-background-1" role="tab"> Tab 1 </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"
                                   className="inline-block py-3 px-6 text-gray-500 hover:text-gray-800 font-medium  tab-active:bg-white tab-active:rounded-xl tab-active:text-indigo-600 tablink whitespace-nowrap"
                                   data-tab="tabs-with-background-2" role="tab"> Tab 2 </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"
                                   className="inline-block py-3 px-6 text-gray-500 hover:text-gray-800 font-medium  tab-active:bg-white tab-active:rounded-xl tab-active:text-indigo-600 tablink whitespace-nowrap"
                                   data-tab="tabs-with-background-3" role="tab"> Tab 3 </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 px-4">
                        <div id="tabs-with-background-1" role="tabpanel" aria-labelledby="tabs-with-background-item-1"
                             className="tabcontent">
                            <p className="text-gray-500 "> This is the <em
                                className="font-semibold text-gray-800 ">first</em> item's tab body. </p>
                        </div>
                        <div id="tabs-with-background-2" className="hidden tabcontent" role="tabpanel"
                             aria-labelledby="tabs-with-background-item-2">
                            <p className="text-gray-500 "> This is the <em
                                className="font-semibold text-gray-800 ">second</em> item's tab body. </p>
                        </div>
                        <div id="tabs-with-background-3" className="hidden tabcontent" role="tabpanel"
                             aria-labelledby="tabs-with-background-item-3">
                            <p className="text-gray-500 "> This is the <em
                                className="font-semibold text-gray-800 ">third</em> item's tab body. </p>
                        </div>
                    </div>
                </div>


            </div>


            <ThemeModeToggle/>

        </div>
    )
        ;
};

export default HeaderSideMenu;