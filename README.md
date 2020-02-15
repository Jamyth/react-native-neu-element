# react-native-neu-element &middot; [![Github license](https://img.shields.io/badge/license-MIT-blue.svg)]() [![npm version](https://img.shields.io/npm/v/react-native-neu-element)](https://npmjs.com/package/react-native-neu-element) ![Downloads](https://img.shields.io/npm/dw/react-native-neu-element.svg?color=blue)

React-native-neu-element ( `RNNE` ) is a JavaScript library for building neumorphic ui on react-native.

- **Easy To Use:** `RNNE` makes it easier to create neumorphic ui without so much pain.

- **Generic Component** `RNNE` makes it easier to create your own neumorphic component by implementing custom styling.

- **Auto Calculate** `RNNE` will automatically calculate the shadows for light and dark base on your theme color, of course you need to pass in `color` as props.

![react-native-neu-element demo](https://i.imgur.com/niQv6fdl.jpg)

## Installation

With react-native-cli

Install library from `npm`

`npm install --save react-native-neu-element`

`npm install --save react-native-svg`

`npm install --save react-native-reanimated`

`npm install --save react-native-linear-gradient`

I am finding a way to install all dependencies by just installing `RNNE`, sorry about that.

## Notice

If you are a professional svg player, please help create the real inset shadow.
You are welcome to leave comments if you found any bugs or thing to have.

## Required Props

Every Neumorphic Component in `react-native-neu-element` has the following props:
( \*must have )

1. Color: String\*
2. Height: Number\*
3. Width: Number\*
4. borderRadius: Number

## Examples

###### 1. NeuView

Basic `react-native-neu-element` Element,
Same as `View` in `react-native`.

![NeuView](https://i.imgur.com/2C9UWxOm.jpg)

```
import { NeuView } from 'react-native-neu-element';
...
    return (
        // Normal
        <NeuView color='#eef2f9' height={100} width={100} borderRadius={16}>
          // Your Code
        </NeuView>

        // Inset
         <NeuView color='#eef2f9' height={100} width={100} borderRadius={16}
          inset
        >
          // Your Code
        </NeuView>

        // Convex
         <NeuView color='#eef2f9' height={100} width={100} borderRadius={16}
          convex
         >
          // Your Code
        </NeuView>

        // Concave
         <NeuView color='#eef2f9' height={100} width={100} borderRadius={16}
           concave
         >
          // Your Code
        </NeuView>

    );
...
```

###### 2. NeuInput

![NeuInput](https://i.imgur.com/bn7h1MZm.jpg)

Simple Neumorphic Text Input

```
import { NeuInput } from 'react-native-neu-element';
...
    return (
      <>
        <NeuInput onChangeText={setText} value={text} placeholder='Text Input...'/>
      </>
    );
...
```

You can also add prefix into text input like this:

![NeuInput with Prefix](https://i.imgur.com/JM9ix3Xm.jpg)

```
import { NeuInput } from 'react-native-neu-element';
import { Image } from 'react-native';
...
    return (
      <>
        <NeuInput
          prefix={
            <Image source={require('path/to/image.png')}
              style={{width: 25, height: 25}}
            />
          }
          onChangeText={setText} value={text} placeholder='Search...'
        />
      </>
    );
...
```

3. NeuButton

Very similar to what `NeuView` does, well they are the same, instead, this time it is touchable!

You can pass in `onPress` / `onPressIn` / `onPressOut` to execute different action in a single press action.

![NeuButton](https://i.imgur.com/7vh1XC5m.jpg)

```
import { NeuButton } from 'react-native-neu-element'
...
    return (
        //Normal Button
        <NeuButton
            color="#eef2f9"
            width={100}
            height={100}
            borderRadius={16}
            style={{marginRight: 30}}>
            <Text>Normal Btn</Text>
          </NeuButton>

          //Convex Button
          <NeuButton
            color="#eef2f9"
            width={100}
            height={100}
            borderRadius={16}

            isConvex

            style={{marginRight: 30}}>
            <Text>Convex Btn</Text>
          </NeuButton>

          //Make it always active
          <NeuButton
            color="#eef2f9"
            width={100}
            height={100}
            borderRadius={16}

            active

            style={{marginRight: 30}}>
            <Text>Active Btn</Text>
          </NeuButton>
    );
...
```

4. NeuSwitch

Waiting for toggling button? Here it is !

![Imgur](https://i.imgur.com/H1kuABVm.jpg)

```
import {NeuSwitch} from 'react-native-neu-element';
...
    return (
        <NeuSwitch
          isPressed={isPressed}
          setIsPressed={setIsPressed}
          color="#eef2f9"
          containerHeight={40}
          containerWidth={80}
          buttonHeight={40}
          buttonWidth={45}
        />

        //button with custom gradient
        <NeuSwitch
          isPressed={isPressed}
          setIsPressed={setIsPressed}
          color="#eef2f9"
          containerHeight={40}
          containerWidth={80}
          buttonHeight={40}
          buttonWidth={45}

          customGradient={['#fc6859', '#e945d0']}
        />
    );
...
```

I will update the rest tomorrow
