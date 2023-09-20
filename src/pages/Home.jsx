import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/NavBar'
import { CartContext } from '../cartcontext'


import Form from '../components/Login'
import Login from '../components/Login'




const Home = () => {
    const [items, setItems] = useState([])
    const { addToCart, cart, login } = useContext(CartContext)
    console.log(cart, 'cart imported from cartcontext')
    //const [newdata, setNewData] = useState("")
    const navigate = useNavigate()
    console.log(login, 'youre logged in')

    useEffect(() => {
        async function GetAllData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                console.log(data)
                setItems(data)


            } catch (error) {

            }

        }
        GetAllData()

    }, [])

    function Sort() {
        // Create a copy of the items array to avoid mutating the original data.
        const sortedItems = [...items];

        // Use the sort() method with a comparison function to sort by the "price" property.
        sortedItems.sort((a, b) => a.price - b.price);

        // Update the state with the sorted array.
        setItems(sortedItems);
    }

    function SortByTitle() {
        const sortedItems = [...items];
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        setItems(sortedItems);
    }

    function SortByCategory() {
        const sortedItems = [...items];
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        setItems(sortedItems);
    }





    //use items state items.sort
    //within sort method use a callback
    //within the callback use sorting logic
    //items.sort return new array
    //call setitems and store that value
    //create button with jsx using onclick

    function FilterByPrice(maxPrice) {
        const filteredItems = items.filter((item) => item.price <= maxPrice);
        setItems(filteredItems);
    }
    function FilterByCost(minPrice) {
        const filterItems = items.filter((item) => item.price <= minPrice);
        setItems(filterItems);
    }

    function FilterByTitle(searchTerm) {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setItems(filteredItems);
    }

    function FilterByCategory(selectedCategory) {
        const filteredItems = items.filter(
            (item) => item.category === selectedCategory
        );
        setItems(filteredItems);
    }


    //logic
    //use items state items.filter
    //within sort method use a callback
    //within the callback use sorting logic
    //items.sort return new array
    //call setitems and store that value
    //create button with jsx using onclick




    return (
        <div className="container">

            <div className="buttons"> <button onClick={Sort}>Sort by Price (Ascending)</button>
                <button onClick={SortByTitle}>Sort by Title (Alphabetical)</button>
                <button onClick={SortByCategory}>Sort by Category (Alphabetical)</button>
            </div>

            <div className="filter">
                <button onClick={() => FilterByPrice(50)}>Filter by Price (Max $50)</button>
                <button onClick={() => FilterByCost(15)}>Filter by Price (Min $15)</button>

                <select onChange={(e) => FilterByCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>

                </select>
            </div>

            <div>
                
            </div>


            {
                items.map((info) => {
                    const product = {
                        id: info.id,
                        title: info.title,
                        price: info.price,
                        image: info.image
                    }
                    return (

                        <div className = "profile">
                            <img className="image" src={info.image} />

                            <h2 key={info.title}>{info.title}</h2>

                            <h3 key={info.price}>Price: ${info.price} </h3>

                            <h3 key={info.description}>{info.description} </h3>

                            <h3 key={info.category}>{info.category} </h3>

                            <button onClick={() => navigate(`/${info.id}`)}>View</button>

                            <button onClick={() => addToCart(product)}>Add</button>

                        </div>
                    )


                })

            }




        </div>
    )

}







export default Home