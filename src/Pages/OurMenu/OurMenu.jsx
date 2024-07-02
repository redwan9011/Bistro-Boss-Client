import { Helmet } from 'react-helmet-async';

import Cover from '../../components/Cover/Cover';
import bannerimage from "../../assets/menu/banner3.jpg"
import dessertimage from "../../assets/menu/dessert-bg.jpeg"
import pizzaimage from "../../assets/menu/pizza-bg.jpg"
import saladimage from "../../assets/menu/salad-bg.jpg"
import soupimage from "../../assets/menu/soup-bg.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import UseMenu from '../../Hooks/UseMenu';
import MenuItem from '../SharedSection/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const OurMenu = () => {

    const [menus] = UseMenu()
    const offerdemenus = menus.filter(menu => menu.category === 'offered')
    const dessertmenus = menus.filter(menu => menu.category === 'dessert')
    const pizzaMenus = menus.filter(menu => menu.category === 'pizza')
    const saladMenus = menus.filter(menu => menu.category === 'salad')
    const soupMenus = menus.filter(menu => menu.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>BISTRO | MENU</title>

            </Helmet>
            <div>

                <Cover
                    image={bannerimage}
                    heading={'OUR MENU'}
                    subtitle={'Would you like to try a dish?'}
                ></Cover>

                {/* todays offerd */}
                <div className='my-10 max-w-6xl mx-auto'>
                    <SectionTitle
                        subtitle={'Dont miss'}
                        heading={'TODAYS OFFER'}
                    ></SectionTitle>

                    <div className="grid grid-cols-2 gap-8 my-10">
                        {
                            offerdemenus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                        }
                    </div>
                    <div className="text-center">
                       <Link to='/order'> <button className="btn btn-outline uppercase  border-t-0 border-r-0 border-l-0 ">Order Your Favourite Food</button></Link>
                    </div>
                </div>


                {/* dessert menu */}

                <div className='my-10 '>
                    <Cover
                        image={dessertimage}
                        heading={'DESSERT'}
                        subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    ></Cover>

                    <div className="grid grid-cols-2 gap-8 my-10 max-w-6xl mx-auto">
                        {
                            dessertmenus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                        }
                    </div>
                    <div className="text-center">
                    <Link to='/order'> <button className="btn btn-outline uppercase  border-t-0 border-r-0 border-l-0 ">Order Your Favourite Food</button></Link>
                    </div>
                </div>


                {/* Pizza menu */}


                <div className='my-10 '>
                    <Cover
                        image={pizzaimage}
                        heading={'PIZZA'}
                        subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    ></Cover>

                    <div className="grid grid-cols-2 gap-8 my-10 max-w-6xl mx-auto">
                        {
                            pizzaMenus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                        }
                    </div>
                    <div className="text-center">
                    <Link to='/order'> <button className="btn btn-outline uppercase  border-t-0 border-r-0 border-l-0 ">Order Your Favourite Food</button></Link>
                    </div>
                </div>


                {/* salad menu */}
                <div className='my-10 '>
                    <Cover
                        image={saladimage}
                        heading={'SALAD'}
                        subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    ></Cover>

                    <div className="grid grid-cols-2 gap-8 my-10 max-w-6xl mx-auto">
                        {
                            saladMenus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                        }

                    </div>
                    <div className="text-center">

                    <Link to='/order'> <button className="btn btn-outline uppercase  border-t-0 border-r-0 border-l-0 ">Order Your Favourite Food</button></Link>
                    </div>
                </div>


                {/* SOUP menu */}
                <div className='my-10 '>
                    <Cover
                        image={soupimage}
                        heading={'SOUP'}
                        subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    ></Cover>

                    <div className="grid grid-cols-2 gap-8 my-10 max-w-6xl mx-auto">
                        {
                            soupMenus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                        }

                    </div>
                    <div className="text-center">
                    <Link to='/order'> <button className="btn btn-outline uppercase  border-t-0 border-r-0 border-l-0 ">Order Your Favourite Food</button></Link>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default OurMenu;