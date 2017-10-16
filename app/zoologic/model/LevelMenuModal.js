import React, {Component} from 'react';
import {View, Image, PanResponder, Animated, Text} from 'react-native';
import {observer} from 'mobx-react/native'
import {autorun} from 'mobx';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import modalStyle from '../style/LevelMenuModalStyle'


@observer
export default class LevelMenuModal extends Component {

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  _replay() {
    this.props.navigator.resetTo({id: 'zoologic-lvl', levelNumber: this.props.levelNumber});
    this._hideModal();
  }

  _transitionToMainMenu() {
    this.props.navigator.resetTo({id: 'zoologic-main'});
    this._hideModal();
  }

  render() {
    return (
      <View >

        <Icon.Button name="menu" size={20} color={modalStyle.iconColor} style={modalStyle.style.showModalBtn} onPress={() => this._showModal()}>
          <Text style={modalStyle.style.showModalBtnTxt}>OPCIONES</Text>
        </Icon.Button>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={modalStyle.style.modalContent}>
            <Icon.Button name="play-arrow" size={25} color={modalStyle.iconColor} style={modalStyle.style.modalBtn} onPress={() => this._hideModal()} >
              <Text style={modalStyle.style.modalBtnText}>REANUDAR</Text>
            </Icon.Button>
            <Icon.Button name="replay" size={25} color={modalStyle.iconColor} style={modalStyle.style.modalBtn} onPress={() => this._replay()} >
              <Text style={modalStyle.style.modalBtnText}>REINICIAR</Text>
            </Icon.Button>
            <Icon.Button name="arrow-back" size={25} color={modalStyle.iconColor} style={modalStyle.style.modalBtn} onPress={() => this._transitionToMainMenu()} >
              <Text style={modalStyle.style.modalBtnText}>MENU PRINCIPAL</Text>
            </Icon.Button>
          </View>
        </Modal>

      </View>
    )
  }
}
