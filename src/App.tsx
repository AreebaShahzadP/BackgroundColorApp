
import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


//Constants
import { currencyByRupee } from './constant';
//Component
import CurrencyButton from './Components/Currencybutton';
import Snackbar from 'react-native-snackbar';


const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')
  
  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "NOt a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  }

  return (
    <>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode='always' //only for iOS
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
          />
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',

  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;



// import { View, Text, StyleSheet, TextInput, FlatList, Pressable } from 'react-native'
// import React, { useState } from 'react'
// import Snackbar from 'react-native-snackbar';

// //constants
// import { currencyByRupee } from './constant'
// import Currencybutton from './Components/Currencybutton'
// //components



// function App(): JSX.Element {

//     const [inputValue, setinputValue] = useState('')
//     const [resultValue, setresultValue] = useState('')
//     const [targetCurrency, settargetCurrency] = useState('')


//     const btnPress = (targetValue: Currency) => {
//         if (!inputValue) {
//             return Snackbar.show({
//                 text: 'Enter a value to convert',
//                 backgroundColor: '#B83227',
//                 textColor: '#000000'

//             })
//         }
//         const inputAmount = parseFloat(inputValue)
//         if (!isNaN(inputAmount)) {
//             const convertedValue = inputAmount * targetValue.value
//             const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
//             setresultValue(result)
//             settargetCurrency(targetValue.name)
//         }
//         else
//             return Snackbar.show({
//                 text: 'Not a valid number to convert',
//                 backgroundColor: '#FF3E4D',
//                 textColor: '#000000'

//             })
//     }
//     return (

//         <View style={styles.container}>
//             <View style={styles.topContainer}>
//                 <View style={styles.rupeesContainer}>
//                     <Text style={styles.rupee}>PKR</Text>
//                     <TextInput
//                         maxLength={14}
//                         value={inputValue}
//                         clearButtonMode='always' //only for ios
//                         onChangeText={setinputValue}
//                         keyboardType='number-pad'
//                         placeholder='Enter ammount in Numbers'
//                     />
//                 </View>
//                 {resultValue && (
//                     <Text style={styles.resultTxt}>
//                         {resultValue}
//                     </Text>
//                 )}
//             </View>
//             <View style={styles.bottomContainer}>
//                 <FlatList
//                 numColumns={3}
//                 data={currencyByRupee}
//                 keyExtractor={item => item.name}
//                 renderItem={({item})=>(
//                     <Pressable style={[styles.button,
//                         targetCurrency === item.name && styles.selected
//                     ]}
//                     onPress={()=> btnPress (item)}>
//                         <Currencybutton {...item}/>
//                     </Pressable>
//                 )}
//                 />
//             </View>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#d1d1d1',
//     },
//     topContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//     },
//     resultTxt: {
//         fontSize: 12,
//         color: '#000000',
//         fontWeight: '800',
//     },
//     rupee: {
//         marginRight: 8,
//         fontSize: 22,
//         color: '#000000',
//         fontWeight: '800',
//     },
//     rupeesContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     inputAmountField: {
//         height: 20,
//         width: 150,
//         padding: 8,
//         borderWidth: 1,
//         borderRadius: 2,
//         backgroundColor: '#000000',
//     },
//     bottomContainer: {
//         flex: 3,
//     },
//     button: {
//         flex: 1,
//         margin: 12,
//         height: 50,

//         borderRadius: 12,
//         backgroundColor: '#fff',
//         elevation: 2,
//         shadowOffset: {
//             width: 1,
//             height: 1,
//         },
//         shadowColor: '#333',
//         shadowOpacity: 0.1,
//         shadowRadius: 1,
//     },
//     selected: {
//         backgroundColor: '#ffeaa7',
//     },
// });
// export default App