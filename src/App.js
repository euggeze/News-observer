import logo from './logo.svg';
import './App.css';
import CustomMenu from "./components/Menu/CustomMenu";
import {useState} from "react";
import MainNewsBlock from "./components/NewsBlock/MainNewsBlock";
import axios from "axios";

function App() {
        const [selectedCategory, setSelectedCategory] = useState('New stories')
        function new_selected_category(category){
            if (selectedCategory === category)
                return
            setSelectedCategory(category)
        }
        return (
        <div className="App">

            <CustomMenu selectedCategory={selectedCategory} setSelectedCategory={new_selected_category}/>
            <MainNewsBlock selectedCategory={selectedCategory}/>
        </div>
      );
}

export default App;
