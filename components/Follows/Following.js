import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import { postRequestFollow } from '../../redux/actions/searchsAction'

const Following = ({item}) => {
    
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.authReducer)
    const [followStatus, setFollowStatus] = useState('Unfollow')
    const navigation = useNavigation()


    const handlePostRequest = () => {
        dispatch(postRequestFollow({userIdRecipient: item.userId, token}));
        (followStatus == 'Unfollow') ? setFollowStatus('Follow') : setFollowStatus('Unfollow')
    }

    const handleNavigate = () => {
        navigation.navigate('ProfileStack', {
            userId: item.userId
        })
    }

  return (
    <View style={tw`flex flex-row items-center py-2 px-3`}>
        <View style={tw`w-full px-3 justify-between flex flex-row`}>
            <TouchableOpacity style={tw`flex flex-row items-center`}
                onPress={handleNavigate}
            >
                <Image 
                    style={tw`w-14 h-14 rounded-full border-2 border-gray-200 mr-2`}
                    resizeMode='cover'
                    source={item.userImage ? {uri: item.userImage} : require('../../assets/images/defaultAvatar.png')}
                />
                <View>
                    <Text style={tw`text-base font-semibold`}>{item.userName}</Text>
                    <Text style={tw`text-xs font-light text-gray-600`}>{item.email}</Text>
                </View>
            </TouchableOpacity>
            <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity 
                    style={followStatus == 'Follow' ? tw` bg-[#5EC2EA] px-6 py-2 rounded-lg` : tw`border border-[#5EC2EA] px-6 py-2 rounded-lg`}
                    activeOpacity={.4}    
                    onPress={handlePostRequest}
                >
                    {
                        followStatus == 'Follow' ? (
                            <Text style={tw`text-white font-bold text-xs`}>
                                {followStatus}
                            </Text>
                        ) : (
                            <Text style={tw`text-[#5EC2EA] font-bold text-xs`}>
                                {followStatus}
                            </Text>
                        )
                    }
                   
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Following