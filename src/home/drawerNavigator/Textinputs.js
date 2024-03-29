import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



export default class textinputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput1BorderColor: '#9C9B9B',
            textInput2BorderColor: '#9C9B9B',
            textInput3BorderColor: '#9C9B9B',
            textInput1: "",
            textInpu2: "",
            textInpu3: "",
            valueEmail: 'Email Adress',
            valuePass: 'Password',
            valueName: 'Full Name',
            secureText: false,
        };
    }

    _focus(n, text) {
        if (text === 'Email Adress') {
            this.setState(
                {
                    valueEmail: "",
                }
            )
        }
        else if (text === 'Password')
            this.setState(
                {
                    valuePass: '',
                }
            )
        else if (text === 'Full Name') this.setState(
            {
                valueName: '',
            }
        )
        if (n === 1) this.setState({
            textInput1BorderColor: '#F5044C',
        })
        else if (n === 2) this.setState({
            textInput2BorderColor: '#F5044C',
        })
        else if (n === 3) this.setState(
            {
                textInput3BorderColor: '#F5044C',
            }
        )


    }
    _blur(n, text) {
        if (n === 1) {
            this.setState(
                {
                    textInput1BorderColor: '#9C9B9B',
                }
            )
            if (text === "")
                this.setState(
                    {
                        valueEmail: 'Email Adress'
                    }
                )
        }
        else if (n === 2) {
            this.setState(
                {
                    textInput2BorderColor: '#9C9B9B',
                }
            )
            if (text === '')
                this.setState(
                    {
                        valuePass: 'Password',
                        secureText: false

                    }
                )
        }
        else if (n === 3) {
            this.setState(
                {
                    textInput3BorderColor: '#9C9B9B',
                }
            )
            if (text === '')
                this.setState(
                    {
                        valueName: 'Full Name'
                    }
                )
        }


    }
    _changeText1(text) {
        this.setState(
            {
                valueEmail: text,
            }
        )
    }
    _changeText2(text) {
        this.setState(
            {
                valuePass: text,
                secureText: true,
            }
        )
    }
    _changeText3(text) {
        this.setState(
            {
                valueName: text,
            }
        )

    }
    render() {
        if ((this.props.text1 === "Log into") && (this.props.text2 === "your account"))

            return (
                <View>
                    <View style={styles.firstInputStyleView}>

                        <TextInput style={[styles.TextInputStyle, { borderColor: this.state.textInput1BorderColor }]}
                            onFocus={() => this._focus(1, this.state.valueEmail)}
                            onBlur={() => this._blur(1, this.state.valueEmail)}
                            value={this.state.valueEmail}
                            onChangeText={(text) => this._changeText1(text)}
                        />
                    </View>
                    <View style={styles.secondInputStyleView}>
                        <TextInput style={[styles.TextInputStyle, { borderColor: this.state.textInput2BorderColor }]}
                            onFocus={() => this._focus(2, this.state.valuePass)}
                            onBlur={() => this._blur(2, this.state.valuePass)}
                            secureTextEntry={this.state.secureText}
                            value={this.state.valuePass}
                            onChangeText={(text) => this._changeText2(text)}
                        />
                    </View>
                </View>
            );
        else if ((this.props.text1 === "Let's create") && (this.props.text2 === "your account"))
            return (
                <View>
                    <View style={styles.firstInputStyleView}>

                        <TextInput style={[styles.TextInputStyle, { borderColor: this.state.textInput3BorderColor }]}
                            onFocus={() => this._focus(3, this.state.valueName)}
                            onBlur={() => this._blur(3, this.state.valueName)}
                            value={this.state.valueName}
                            onChangeText={(text) => this._changeText3(text)}
                        />
                    </View>
                    <View style={styles.secondInputStyleView}>

                        <TextInput style={[styles.TextInputStyle, { borderColor: this.state.textInput1BorderColor }]}
                            onFocus={() => this._focus(1, this.state.valueEmail)}
                            onBlur={() => this._blur(1, this.state.valueEmail)}
                            value={this.state.valueEmail}
                            onChangeText={(text) => this._changeText1(text)}
                        />
                    </View>
                    <View style={styles.secondInputStyleView}>
                        <TextInput style={[styles.TextInputStyle, { borderColor: this.state.textInput2BorderColor }]}
                            onFocus={() => this._focus(2, this.state.valuePass)}
                            onBlur={() => this._blur(2, this.state.valuePass)}
                            secureTextEntry={this.state.secureText}
                            value={this.state.valuePass}
                            onChangeText={(text) => this._changeText2(text)}
                        />
                    </View>
                </View>
            )
        else if ((this.props.text1 === "Reset your password") && (this.props.text2 === "We will send you over email the instructions in order to get your password reseted."))
            return (
                <View style={styles.firstInputStyleView}>
                    <Text>{"\n\n"}</Text>
                    <TextInput style={[styles.TextInputStyle, { borderColor: this.state.textInput1BorderColor }]}
                        onFocus={() => this._focus(1, this.state.valueEmail)}
                        onBlur={() => this._blur(1, this.state.valueEmail)}
                        value={this.state.valueEmail}
                        onChangeText={(text) => this._changeText1(text)}
                    />
                    <Text>{"\n\n"}</Text>
                </View>
            )
    }
}

const styles = StyleSheet.create(
    {
        firstInputStyleView:
        {
            marginTop: 30,
            marginLeft: 16,
            marginRight: 16,
        },
        secondInputStyleView:
        {
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16
        },
        TextInputStyle:
        {
            borderRadius: 8,
            borderWidth: 1,
            color: '#9C9B9B'
        },

    }
)