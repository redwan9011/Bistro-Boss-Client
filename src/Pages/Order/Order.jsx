import Cover from "../../components/Cover/Cover";
import shopImage from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../Hooks/UseMenu";
import { Helmet } from "react-helmet-async";
import OrderTab from "./OrderTab";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [menus] = UseMenu()
    
    const dessertmenus = menus.filter(menu => menu.category === 'dessert')
    const pizzaMenus = menus.filter(menu => menu.category === 'pizza')
    const saladMenus = menus.filter(menu => menu.category === 'salad')
    const soupMenus = menus.filter(menu => menu.category === 'soup')
    const drinksMenus = menus.filter(menu => menu.category === 'drinks')
    return (
        <div>
            <div>
            <Helmet>
                <title>BISTRO | ORDER</title>

            </Helmet>
            </div>
            <Cover
                image={shopImage}
                heading={'ORDER FOOD'}
                subtitle={'Would you like to try a dish?'}
            ></Cover>

            <div className="my-10 text-center max-w-6xl mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab>SALDA</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                     <OrderTab 
                        items={saladMenus}
                     ></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizzaMenus}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                    <OrderTab items={soupMenus}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessertmenus}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinksMenus}></OrderTab>
                    </TabPanel>
                </Tabs>

            </div>

        </div>
    );
};

export default Order;