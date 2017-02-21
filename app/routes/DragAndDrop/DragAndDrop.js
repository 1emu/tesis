import React, {Component} from "react";

import {
    View,
    Text,
    PanResponder,
    Animated,
    Easing
} from 'react-native';

import style from './style.js'

export default class DragAndDrop extends Component{
    constructor(props){
        super(props);

        this.state = {
            showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY()
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => true,
            onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                if(this.isDropZone(gesture)){
                    this.props.navigator.pop();
                }else{
                    Animated.spring(
                        this.state.pan,
                        {toValue:{x:0,y:0}}
                    ).start();
                }
            }
        });
    }

    isDropZone(gesture){
        var dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    setDropZoneValues(event){
        this.setState({
            dropZoneValues : event.nativeEvent.layout
        });
    }

    render(){
        return (
            <View style={style.mainContainer}>
                <View 
                    onLayout={this.setDropZoneValues.bind(this)}
                    style={style.dropZone}>
                    <Text style={style.text}>Drop me here!</Text>
                </View>

                {this.renderDraggable()}
            </View>
        );
    }

    renderDraggable(){
        if(this.state.showDraggable){
            return (
                <View style={style.draggableContainer}>
                    <Animated.View 
                        {...this.panResponder.panHandlers}
                        style={[this.state.pan.getLayout(), style.circle]}>
                        <Text style={style.text}>Drag me!</Text>
                    </Animated.View>
                </View>
            );
        }
    }
}
