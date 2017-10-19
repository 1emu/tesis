import React, {Component} from 'react';
import {View, Image, PanResponder, Animated, Text} from 'react-native';
import {observer} from 'mobx-react/native'
import {autorun} from 'mobx';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../style/LevelMenuModalStyle'


@observer
export default class LevelMenuModal extends Component {

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  _replay() {
    this.props.navigator.resetTo({id: 'rush-hour-lvl', levelNumber: this.props.levelNumber});
    this._hideModal();
  }

  _levelSelectionMenu() {
    this.props.navigator.resetTo({id: 'rush-hour-level-selection'});
    this._hideModal();
  }

  _transitionToMainMenu() {
    this.props.navigator.resetTo({id: 'rush-hour-main'});
    this._hideModal();
  }

  render() {
    return (
      <View >

        <Icon.Button name="menu" size={20} style={style.showModalBtn} onPress={() => this._showModal()}>
          <Text style={style.showModalBtnTxt}>OPCIONES</Text>
        </Icon.Button>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={style.modalContent}>
            <Icon.Button name="play-arrow" size={25} style={style.modalBtn} onPress={() => this._hideModal()} >
              <Text style={style.modalBtnText}>REANUDAR</Text>
            </Icon.Button>
            <Icon.Button name="replay" size={25} style={style.modalBtn} onPress={() => this._replay()} >
              <Text style={style.modalBtnText}>REINICIAR</Text>
            </Icon.Button>
            <Icon.Button name="list" size={25} style={style.modalBtn} onPress={() => this._levelSelectionMenu()} >
              <Text style={style.modalBtnText}>NIVELES</Text>
            </Icon.Button>
            <Icon.Button name="arrow-back" size={25} style={style.modalBtn} onPress={() => this._transitionToMainMenu()} >
              <Text style={style.modalBtnText}>MENU PRINCIPAL</Text>
            </Icon.Button>
          </View>
        </Modal>

      </View>
    )
  }
}
