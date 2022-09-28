/* import { Header, Contents } from './components/Layout'; */

/* const App = () => {
    return (
      <Container>
        <Button title="000 습관 만들기" />
        <Button title="1등 혜택: 500만원" />
      </Container>
    );
  }; 
  
const styles = StyleSheet.create({
    contents: {
  
    },
    text: {
      fontFamily: 'Pretendard',
      fontStyle: normal,
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 17,
      color: 'black',
    }
  }) */

/* export default App;
 */

import React from 'react';
import {StyleSheet,Text,View,Image}from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.participantText}>
            참가자 21,000
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.bodyone}>
            <View style={styles.contentone}>
              <View style={styles.textbox}>
                <Text style={styles.titleText}>
                  습관만들기
                </Text>
                <View style={styles.frame319}>
                  <View style={styles.menuItem}>
                    <Text style={styles.tagText}>
                      #습관태그
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.contenttwo}>
                <Text style={styles.benefitText}>
                  챌린지 우승 혜택
                </Text>
                <Text style={styles.firstText}>
                  1등 혜택 500만원 
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bodytwo}>
            <Text style={styles.rankingText}>
              실시간 랭킹
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 335,
    height: 524,
  },
  header: {
    flex: 0,
    backgroundColor: 'red',
    width: 335,
    height: 242,
  },
  footer: {
    flex: 0,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 19,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    gap: 10,
    width: 335,
    height: 280.33,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 33.33,
    borderBottomLeftRadius: 33.33,
  },
  bodyone: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 20,
    width: 287,
    height: 123.33,
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
  contentone: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 16,
    width: 287,
    height: 53,
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
  textbox: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 2,
    width: 287,
    height: 53,
    order: 0,
    flexGrow: 0,
  },
  frame319: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap: 2,
    width: 66,
    height: 21,
    order: 1,
    flexGrow: 0,
  },
  menuItem: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 2,
    width: 66,
    height: 21,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    order: 0,
    flexGrow: 0,
  },
  contenttwo: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    gap: 2,
    width: 66,
    height: 21,
  },
  participantText: {
    alignSelf: 'center',
  },
  titleText: {
    flex: 0,
    width: 287,
    height: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 30,
    alignItems: 'center',
    letterSpacing: -0.04,
    color:'#0D0D0D',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
  tagText: {
    flex: 0,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: -0.408,
    color:'#0D0D0D',
    order: 0,
    flexGrow: 0,
  },
  benefitText: {
    fontStyle: 'normal',
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 13,
    color:'#1C1C1C',
  },
});
