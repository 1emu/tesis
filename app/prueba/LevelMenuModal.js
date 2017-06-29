import React, {Component} from 'react';
import {View, Image, PanResponder, Animated, Text} from 'react-native';
import Button from 'apsl-react-native-button';
import {observer} from 'mobx-react/native'
import {autorun} from 'mobx';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

        <Icon.Button name="menu" size={20} style={style.showModalBtn} onPress={() => this._showModal()}>
          <Text style={style.showModalBtnTxt}>Opciones</Text>
        </Icon.Button>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={style.modalContent}>
            <Icon.Button name="play-arrow" size={25} style={style.modalBtn} onPress={() => this._hideModal()} >
              <Text style={style.modalBtnText}>Reanudar</Text>
            </Icon.Button>
            <Icon.Button name="replay" size={25} style={style.modalBtn} onPress={() => this._hideModal()} >
              <Text style={style.modalBtnText}>Reiniciar</Text>
            </Icon.Button>
            <Icon.Button name="list" size={25} style={style.modalBtn} onPress={() => this._hideModal()} >
              <Text style={style.modalBtnText}>Seleccion de niveles</Text>
            </Icon.Button>
          </View>
        </Modal>

      </View>
    )
  }
}
