import React, {Component} from 'react';
import {View, Image, PanResponder, Animated, Text} from 'react-native';
import Button from 'apsl-react-native-button';
import {observer} from 'mobx-react/native'
import {autorun} from 'mobx';
import Modal from 'react-native-modal';
import style from './LevelMenuModalStyle'
@observer
export default class LevelMenuModal extends Component {

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    return (
      <View >

        <Button onPress={() => this._showModal()} style={style.showModalBtn}>
          <Text>Menu</Text>
        </Button>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={style.modalContent}>
            <Text>Hello!</Text>
            <Button onPress={() => this._hideModal()} style={style.modalBtn}>
              <Text style={style.modalBtnText}>Volver</Text>
            </Button>
          </View>
        </Modal>

      </View>
    )
  }
}
