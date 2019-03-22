# react-native-extended-stylesheet
Extend React Native StyleSheet with parameters


## Installation

Installation can be done through `npm` or `yarn`:

```shell
npm i react-native-above-keyboard --save
```

```shell
yarn add react-native-above-keyboard
```

## Usage

```js
import { React } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleSheeet from 'react-native-extended-stylesheet';
```

#### Pass parameters to StyleSheet.

```jsx
const Button = ({ title, size = 60 }) => (
 <TouchableOpacity style={styles.get("button", {size})}>
   <Text>{title}</Text>
 </TouchableOpacity>
);

const styles = StyleSheet.create({
 button: (params) => ({
   width: params.size,
   height: params.size / 2,
   backgroundColor: "#333"
 })
})
```

#### Use plain objects if you don't need to pass a parameter.

```jsx
const Button = ({size, title}) => (
 <TouchableOpacity style={styles.get("button")}>
   <Text>{title}</Text>
 </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
   width: 70,
   height: 35,
   backgroundColor: "blue",
   ...StyleSheet.absoluteFill
  }
});
```

#### If at any point you want to access the entire styles.

```jsx
const Button = ({size, title}) => (
 <TouchableOpacity style={styles.styles["button"]}>
   <Text>{title}</Text>
 </TouchableOpacity>
);


#### Other methods
```StyleSheet.flatten```: Flattens an array of style objects, into a single style object.



## License

MIT.
