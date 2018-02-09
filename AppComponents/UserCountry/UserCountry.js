import React, { Component } from 'react';
import {StyleSheet, Text, Picker} from 'react-native';

export default class UserCountry extends Component {
static navigationOptions: {title: 'Set your Country'};

  state = {
    country: '',
  }

  onValueChange = (itemValue) => {
    const {onValueChange} = this.props

    onValueChange(itemValue)
    this.setState({country: itemValue})
  }

  render() {
    return (
        <Picker
          selectedValue={this.state.country}
          onValueChange={this.onValueChange}
          mode="dropdown">
          <Picker.Item label="Please select country" value={''} />
          <Picker.Item label="Afghanistan" value={0} />
          <Picker.Item label="Albania" value={1} />
          <Picker.Item label="Algeria" value={2} />
          <Picker.Item label="Angola" value={3} />
          <Picker.Item label="Antigua and Barbuda" value={4} />
          <Picker.Item label="Argentina" value={5} />
          <Picker.Item label="Armenia" value={6} />
          <Picker.Item label="Australia" value={7} />
          <Picker.Item label="Austria" value={8} />
          <Picker.Item label="Azerbaijan" value={9} />
          <Picker.Item label="Bahamas" value={10} />
          <Picker.Item label="Bahrain" value={11} />
          <Picker.Item label="Bangladesh" value={12} />
          <Picker.Item label="Barbados" value={13} />
          <Picker.Item label="Belarus" value={14} />
          <Picker.Item label="Belgium" value={15} />
          <Picker.Item label="Belize" value={16} />
          <Picker.Item label="Benin" value={17} />
          <Picker.Item label="Bhutan" value={18} />
          <Picker.Item label="Bolivia" value={19} />
          <Picker.Item label="Bosnia" value={20} />
          <Picker.Item label="Botswana" value={21} />
          <Picker.Item label="Brazil" value={22} />
          <Picker.Item label="Brunei Darrusalam" value={23} />
          <Picker.Item label="Bulgaria" value={24} />
          <Picker.Item label="Burkina Faso" value={25} />
          <Picker.Item label="Burundi" value={26} />
          <Picker.Item label="Cabo Verde" value={27} />
          <Picker.Item label="Cambodia" value={28} />
          <Picker.Item label="Cameroon" value={29} />
          <Picker.Item label="Canada" value={30} />
          <Picker.Item label="Central African Republic" value={31} />
          <Picker.Item label="Chad" value={32} />
          <Picker.Item label="Chile" value={33} />
          <Picker.Item label="China" value={34} />
          <Picker.Item label="Colombia" value={35} />
          <Picker.Item label="Comoros" value={36} />
          <Picker.Item label="Congo" value={37} />
          <Picker.Item label="Costa Rica" value={38} />
          <Picker.Item label="Côte d'Ivoire" value={39} />
          <Picker.Item label="Croatia" value={40} />
          <Picker.Item label="Cuba" value={41} />
          <Picker.Item label="Cyprus" value={42} />
          <Picker.Item label="Czech Republic" value={43} />
          <Picker.Item label="Democratic People's Republic of Korea" value={44} />
          <Picker.Item label="Democratic Republic of the Congo" value={45} />
          <Picker.Item label="Denmark" value={46} />
          <Picker.Item label="Djibouti" value={47} />
          <Picker.Item label="Dominican Republic" value={48} />
          <Picker.Item label="Ecuador" value={49} />
          <Picker.Item label="Egypt" value={50} />
          <Picker.Item label="El Salvador" value={51} />
          <Picker.Item label="Equatorial Guinea" value={52} />
          <Picker.Item label="Eritrea" value={53} />
          <Picker.Item label="Estonia" value={54} />
          <Picker.Item label="Ethiopia" value={55} />
          <Picker.Item label="Fiji" value={56} />
          <Picker.Item label="Finland" value={57} />
          <Picker.Item label="France" value={58} />
          <Picker.Item label="Gabon" value={59} />
          <Picker.Item label="Gambia" value={60} />
          <Picker.Item label="Georgia" value={61} />
          <Picker.Item label="Germany" value={62} />
          <Picker.Item label="Ghana" value={63} />
          <Picker.Item label="Greece" value={64} />
          <Picker.Item label="Grenada" value={65} />
          <Picker.Item label="Guatemala" value={66} />
          <Picker.Item label="Guinea" value={67} />
          <Picker.Item label="Guinea-Bissau" value={68} />
          <Picker.Item label="Guyana" value={69} />
          <Picker.Item label="Haiti" value={70} />
          <Picker.Item label="Honduras" value={71} />
          <Picker.Item label="Hungary" value={72} />
          <Picker.Item label="Iceland" value={73} />
          <Picker.Item label="India" value={74} />
          <Picker.Item label="Indonesia" value={75} />
          <Picker.Item label="Iran" value={76} />
          <Picker.Item label="Iraq" value={77} />
          <Picker.Item label="Ireland" value={78} />
          <Picker.Item label="Israel" value={79} />
          <Picker.Item label="Italy" value={80} />
          <Picker.Item label="Jamaica" value={81} />
          <Picker.Item label="Japan" value={82} />
          <Picker.Item label="Jordan" value={83} />
          <Picker.Item label="Kazakhstan" value={84} />
          <Picker.Item label="Kenya" value={85} />
          <Picker.Item label="Kiribati" value={86} />
          <Picker.Item label="Kuwait" value={87} />
          <Picker.Item label="Kyrgyzstan" value={88} />
          <Picker.Item label="Lao People's Democratic Republic" value={89} />
          <Picker.Item label="Latvia" value={90} />
          <Picker.Item label="Lebanon" value={91} />
          <Picker.Item label="Lesotho" value={92} />
          <Picker.Item label="Liberia" value={93} />
          <Picker.Item label="Libya" value={94} />
          <Picker.Item label="Lithuania" value={95} />
          <Picker.Item label="Luxembourg" value={96} />
          <Picker.Item label="Madagascar" value={97} />
          <Picker.Item label="Malawi" value={98} />
          <Picker.Item label="Malaysia" value={99} />
          <Picker.Item label="Maldives" value={100} />
          <Picker.Item label="Mali" value={101} />
          <Picker.Item label="Malta" value={102} />
          <Picker.Item label="Mauritania" value={103} />
          <Picker.Item label="Mauritius" value={104} />
          <Picker.Item label="Mexico" value={105} />
          <Picker.Item label="Micronesia" value={106} />
          <Picker.Item label="Mongolia" value={107} />
          <Picker.Item label="Montenegro" value={108} />
          <Picker.Item label="Morocco" value={109} />
          <Picker.Item label="Mozambique" value={110} />
          <Picker.Item label="Myanmar" value={111} />
          <Picker.Item label="Namibia" value={112} />
          <Picker.Item label="Nepal" value={113} />
          <Picker.Item label="Netherlands" value={114} />
          <Picker.Item label="New Zealand" value={115} />
          <Picker.Item label="Nicaragua" value={116} />
          <Picker.Item label="Niger" value={117} />
          <Picker.Item label="Nigeria" value={118} />
          <Picker.Item label="Norway" value={119} />
          <Picker.Item label="Oman" value={120} />
          <Picker.Item label="Pakistan" value={121} />
          <Picker.Item label="Panama" value={122} />
          <Picker.Item label="Papua New Guinea" value={123} />
          <Picker.Item label="Paraguay" value={124} />
          <Picker.Item label="Peru" value={125} />
          <Picker.Item label="Philippines" value={126} />
          <Picker.Item label="Poland" value={127} />
          <Picker.Item label="Portugal" value={128} />
          <Picker.Item label="Qatar" value={129} />
          <Picker.Item label="Republic of Korea" value={130} />
          <Picker.Item label="Republic of Moldova" value={131} />
          <Picker.Item label="Romania" value={132} />
          <Picker.Item label="Russia" value={133} />
          <Picker.Item label="Rwanda" value={134} />
          <Picker.Item label="Saint Lucia" value={135} />
          <Picker.Item label="Saint Vincent and Grenadines" value={136} />
          <Picker.Item label="Samoa" value={137} />
          <Picker.Item label="Sao Tome and Principe" value={138} />
          <Picker.Item label="Saudia Arabia" value={139} />
          <Picker.Item label="Senegal" value={140} />
          <Picker.Item label="Serbia" value={141} />
          <Picker.Item label="Seychelles" value={142} />
          <Picker.Item label="Sierra Leone" value={143} />
          <Picker.Item label="Singapore" value={144} />
          <Picker.Item label="Slovakia" value={145} />
          <Picker.Item label="Slovenia" value={146} />
          <Picker.Item label="Solomon Islands" value={147} />
          <Picker.Item label="Somalia" value={148} />
          <Picker.Item label="South Africa" value={149} />
          <Picker.Item label="South Sudan" value={150} />
          <Picker.Item label="Spain" value={151} />
          <Picker.Item label="Sri Lanka" value={152} />
          <Picker.Item label="Sudan" value={153} />
          <Picker.Item label="Suriname" value={154} />
          <Picker.Item label="Swaziland" value={155} />
          <Picker.Item label="Sweden" value={156} />
          <Picker.Item label="Switzerland" value={157} />
          <Picker.Item label="Syria" value={158} />
          <Picker.Item label="Tajikistan" value={159} />
          <Picker.Item label="Thailand" value={160} />
          <Picker.Item label="Yugoslavia" value={161} />
          <Picker.Item label="Timor-Leste" value={162} />
          <Picker.Item label="Togo" value={163} />
          <Picker.Item label="Tonga" value={164} />
          <Picker.Item label="Trinidad" value={165} />
          <Picker.Item label="Tunisia" value={166} />
          <Picker.Item label="Turkey" value={167} />
          <Picker.Item label="Turkmenistan" value={168} />
          <Picker.Item label="Uganda" value={169} />
          <Picker.Item label="Ukraine" value={170} />
          <Picker.Item label="United Arab Emirates" value={171} />
          <Picker.Item label="United Kingdom" value={172} />
          <Picker.Item label="Tanzania" value={173} />
          <Picker.Item label="United States of America" value={174} />
          <Picker.Item label="Uruguay" value={175} />
          <Picker.Item label="Uzbekistan" value={176} />
          <Picker.Item label="Vanuatu" value={177} />
          <Picker.Item label="Venezuela" value={178} />
          <Picker.Item label="Vietnam" value={179} />
          <Picker.Item label="Yemen" value={180} />
          <Picker.Item label="Zambia" value={181} />
          <Picker.Item label="Zimbabwe" value={182} />
        </Picker>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 1,
      margin: 10,
      width: 400,
      height: 50,
      backgroundColor: 'whitesmoke',

  },
  component4: {
    fontSize: 20,
  },
})
