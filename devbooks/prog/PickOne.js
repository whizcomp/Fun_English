import React, { useRef, useState } from 'react';
import { Button,Text, View,StyleSheet, FlatList,TouchableWithoutFeedback, Animated} from 'react-native';
import RadioView from '../components/RadioView';
function PickOne(){
  const values=[
        {name:"beyonce",selected:false,ans:true},
        {name:"Adelle",selected:false,ans:false},
        {name:"Arrow Boy",selected:false,ans:false},
        {name:"Alaine",selected:false,ans:false}
    ]
    const fadeAnim=useRef(new Animated.Value(0)).current
    const animateMe=Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
    useNativeDriver: true
      }
    ).start();
    const [selected,setSelected]=useState(undefined)
  const selectedVal = (val) =>{ 
    setSelected(val)
  }
  const nextQuiz=()=>{
    animateMe
    setShowReward(true)
    setTimeout(() => {
      console.log('next')
    }, 2000);
  }
  const [tipping,setTipping]=useState(false)
  const [reward,setReward]=useState(30);
  const [showReward,setShowReward]=useState(false)
  const taxing=()=>{
    
    const newReward= reward-10;
    setReward(newReward);
    setTipping(!tipping)
  }
  const renderItem=({item})=><RadioView selected={JSON.stringify(selected) === JSON.stringify(item) } name={item.name} onPress={()=>selectedVal(item)}/>
    return (
    <View >
      <Text style={styles.song}>Halo</Text>
      {showReward&&<Animated.View  style={[selected.ans?styles.reward:styles.rewardFailed,  {opacity: fadeAnim}]}>
        <Text style={styles.rewardText}>+ {reward}</Text>
      </Animated.View >}
      <View style={styles.flow}>
      <FlatList
        data={values}
        renderItem={renderItem}
        keyExtractor={item => item.name.toString()}
      />
      </View>
      {tipping&&<View style={styles.wrng}>
      <Text style={styles.tiptxt}>Also sang crazy in love</Text>
      <TouchableWithoutFeedback>
        <Text>X</Text>
        </TouchableWithoutFeedback>
    </View>}
      <View style={styles.btm}>
      <View style={styles.tip}>
      
        {!tipping &&<TouchableWithoutFeedback onPress={taxing}>
        <View>
          <Text>Get tip -10</Text>
        </View>
      </TouchableWithoutFeedback>}
      </View>
      <View>
      <Button
        onPress={nextQuiz}
        title="Submit"
        color="#08B92E"
/>
      </View>
    </View>
    </View>
    );

  
}
const styles = StyleSheet.create({
  btm:{
    paddingTop:"10%",
    flexDirection:"row"
  },
    flow:{
        paddingTop:"20%"
      },
      reward:{
        alignSelf:"flex-end",
        width:130,
        height:130,
        backgroundColor:"#08B92E",
        borderRadius:65,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute"
      },
      rewardFailed:{
        alignSelf:"flex-end",
        width:130,
        height:130,
        backgroundColor:"red",
        borderRadius:65,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute"
      },
      rewardText:{
        fontSize:45,
      },
    song:{
        fontSize:36,
        fontWeight:"bold"
      },
      tip:{
        marginRight:"auto",
        backgroundColor:"blue"
      },
      
  tiptxt:{
    marginRight:"auto",
    color:"red"
  },
      wrng:{
        flexDirection:"row",
        marginTop:"10%",
        backgroundColor:"#FFFF8F",
        padding:5
      }
})
export default PickOne;

