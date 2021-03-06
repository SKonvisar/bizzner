import { StyleSheet, Dimensions } from 'react-native';
win = Dimensions.get('window');
const MainStyles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor:'#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight:20,
        textAlign: 'center',
    },
    minContainer :{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width:'100%'
    },
    normalContainer:{
        backgroundColor:'#FFF',
        flex:1
    },
    btn:{
        width:'100%',
        marginTop:10,
        marginBottom:10,
        color : '#fff',        
    },
    linBtn:{
        /*backgroundColor:'#0077b5',
        marginBottom: 20,
        color : '#fff',*/
        shadowColor: '#000',
        shadowRadius: 7,
        shadowOffset: {width:0,height:0},
        marginTop:30,
        shadowOpacity: 0.4,
    },
    linBtnImg:{
        shadowOpacity: 1,
    },
    emailBtn:{
        backgroundColor:'#8da6d5',
        marginBottom: 20,
        color : '#fff',
    },
    sUpBtn:{
        backgroundColor:'#0947b9',
        marginBottom: 20,
        color : '#fff',
    },
    btnText:{
        textAlign:'center',
        color:'#fff',
        justifyContent:'center',
        alignItems: 'center',
    },
    btnImg:{
        alignItems: 'center',
        justifyContent: 'center',
        width:win.width
    },
    orImg:{
        marginTop:40,
        marginBottom:40
    },
    btnWrapper:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    subHeading:{
        fontSize:16,
        color:'#232323'
    },
    mPHeading:{
        fontSize:17,
        color:'#416bb9',
        marginTop : 10,
        fontFamily:'Roboto-Light',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom:20
    },
    saperator:{
        color:'#8da6d5'
    },
    profileHeader:{
        backgroundColor:'#2e4d85',
        height:100,
        paddingTop: 20,
        overflow: 'visible',
        paddingLeft:30,
        flexDirection:'row'
    },
    pHeadPicWrapper:{
        position:'relative'
    },
    pHeadPic:{
        width:130,
        height:130,
        borderWidth: 5,
        borderColor: '#FFF',
        borderRadius: 70,
        marginBottom:20,
        overflow: 'hidden',
        alignItems:'center',
        justifyContent:'center'
    },
    pHeadPicEditBtnWrapper:{
        position:'absolute',
        top:5,
        left:100,
    },
    pHeadPicEditBtn:{
        backgroundColor:'#8da6d4',
        color:'rgba(255,255,255,0.8)',
        width:33,
        height:33,
        borderRadius:50,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        padding:0
    },
    pHeadPicEditBtnI:{
        color:'rgba(255,255,255,0.8)',
        fontSize:18
    },
    pHeadPicOptions:{
        position:"absolute",
        width: 120,
        top: 40,
        backgroundColor:'#FFF',
        borderRadius:5,
        elevation:3,
        borderWidth:1,
        borderColor:'#dedede'
    },
    pHPOBtn:{
        width:'100%',
        padding:10,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'Roboto-Medium',
    },
    profileTextWrapper:{
        paddingLeft:20,
        width:150
    },
    pTWText:{
        color:'#8da6d5',
        fontFamily:'Roboto-Medium',
        fontSize:13,
    },
    pTWNameText:{
        fontFamily:'Roboto-Light',
        fontSize:16,
        color:'#fff',
        marginTop:10
    },
    profileBody:{
        flex:1,
        marginTop:60,
        backgroundColor:'#fff',
        paddingHorizontal:30,
    },
    inputFieldWithIcon:{
        borderBottomColor:'#8da6d4',
        borderBottomWidth: 1,
        paddingBottom: 5,
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent:'flex-start',
        marginBottom:20,
        position:'relative',
        overflow:'visible'
    },
    iFWIIcon:{
        color:'#416bb9',
        fontSize:18,
        paddingTop: 13,
        width:35,
        height:40,
    },
    ifWITI:{
        height:50,
        flex: 2,
        //flexDirection:'row',
        //paddingTop: 10,
        paddingRight: 10,
        //paddingBottom: 10,
        textAlign:'left',
        paddingLeft: 0,
        fontSize:18,
        fontFamily:'Roboto-Light'
    },
    iFWIPlus:{
        flex:2,
        width:40,
        height:40,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        textAlign:'left',
        borderRadius:50,
    },
    ifWIPlusIcon:{
        flex:2,
        color:'rgba(9,71,185,0.5)',
        fontSize:23,
        paddingTop: 10,
    },
    btnSave:{
        backgroundColor:'#0947b9',
        paddingTop:16,
        paddingBottom:16,
        paddingLeft:32,
        paddingRight:32,
        borderRadius:80,
        marginBottom:16
    },
    btnSaveText:{
        color:'#FFF',
        fontFamily:'Roboto-Regular',
        fontSize:20
    },
    confirmPopup:{
        padding:0
    },
    confirmPopupHeader:{
        height:50,
        backgroundColor:'#2e4d85',
        padding:10,
        width:'100%',
        flexDirection:'row',
    },
    cPCOption1:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingBottom:30,
        borderBottomColor:'#8da6d4',
        borderBottomWidth:1
    },
    cPCOption2:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingBottom:20,
        paddingTop:30,
    },
    eventsHeader:{
        height:60,
        backgroundColor:'#2e4d85',

    },
    tabContainer:{
        backgroundColor:'#fff',
        paddingLeft:15,
        paddingRight:15,
        shadowRadius:2,
        shadowOpacity:0.3,
        shadowOffset:{width:3,height:3},
        elevation:5,
        shadowColor:'#000'
    },
    tabItem:{
        height:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    tabItemIcon:{
        color:'#8da6d5',
        fontSize:16,
        marginRight: 6,
    },
    tabItemText:{
        color:'#8da6d5',
        fontFamily:'Roboto-Medium',
        fontSize:16
    },
    tabItemActive:{
        borderBottomColor:'#05296c',
        borderBottomWidth:4
    },
    tabItemActiveIcon:{color:'#05296c',},
    tabItemActiveText:{color:'#05296c',},
    EventItem:{
        padding:15,
        borderBottomColor:'#8da6d4',
        borderBottomWidth:1,
        flexDirection:'row'
    },

    EIOnline:{
        backgroundColor:'#e8edf6',
    },
    EIOffline:{
        backgroundColor:'#d1dbed',
    },
    EventItemImageWrapper:{
        overflow:'hidden',
        width:70,
        height:70,
        backgroundColor:'#8da6d4'
        //alignItems:'center',
        //justifyContent:'center'
    },
    EventItemTextWrapper:{marginLeft:15,flexGrow: 1,width: 0,alignItems:'flex-start'},
    EITWName:{
        fontFamily:'Roboto-Regular',
        fontSize:15,
        color:'#03163a',
        alignItems:'flex-start'
    },
    EITWAddress:{
        fontFamily:'Roboto-Light',
        fontSize:14,
        color:'#03163a',
        paddingRight:5,
        flexWrap: 'wrap',
        alignItems:'flex-start'
    },
    EITWAction:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center'
    },
    EITWActionIcon:{
        marginRight:5,
    },
    EITWActionText:{
        fontSize:16,
        fontFamily:'Robot-Medium'
    },
    EITWAIOnline:{color:'#39b549'},
    EITWATOnline:{color:'#39b549'},
    EITWAIOffline:{color:'#8da6d5'},
    EITWATOffline:{color:'#2f4d85'},
    createEventFWI:{
        borderBottomColor:'#8da6d4',
        borderBottomWidth: 1,
        paddingBottom: 15,
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60,
        position:'relative',
        overflow:'visible'
    },
    cEFWIIcon:{
        color:'#7590c8',
        fontSize:18,
        paddingTop: 13,
        paddingRight: 0,
        paddingBottom: 0,
        width:35,
        height:45
    },
    cEFWITF:{
        height:60,
        flex: 1,
        flexDirection:'row',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize:18,
        fontFamily:'RobotoLight'
    },
    locationItemBtn:{
       borderBottomColor:'#8da6d4',
       borderBottomWidth:1,
       paddingHorizontal:10,
       paddingVertical:10,
       textAlign:'left',
       alignItems:'flex-start',
       justifyContent:'flex-start',
       alignContent: 'flex-start',
    },
    locationItemWrapper:{
        width:'100%',
        left:0,
        maxHeight: 250,
        //position:'absolute',
        backgroundColor:'#FFF',
        zIndex: 4000,
        borderColor:'#8da6d4',
        borderWidth:1,
        //top:15,
        marginBottom:0,
        borderTopWidth: 0,
        elevation:3,
        overflow:'hidden'
    }
});

export default MainStyles;