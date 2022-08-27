import React, { useState } from 'react'
import { View ,FlatList } from 'react-native'
import MyButton from '../Components/MyButton'


function ColorScreen () {

    const [colors ,setColors] = useState([])

    function  randomRgb () {
        const red = Math.floor (Math.random()* 256 ) ;
        const green = Math.floor (Math.random()* 256 ) ;
        const blue = Math.floor (Math.random()* 256 ) ;

        return `rgb(${red} , ${green} , ${blue})`
    }

    function generateColor() {

        setColors([...colors , randomRgb()])
    }

    return (
        <View>

            <MyButton title='Generate Color' onPress={generateColor} />
                <FlatList 
                keyExtractor={(item)=>item}
                data={colors}
              
                renderItem={({item})=>{
                    return   <View style = {{height : 100 , width :100 , backgroundColor : item}}></View>
                }}>

                </FlatList>

           

    

        </View>
    )
}


export default ColorScreen ; 