import React from 'react'; 
import { 
	Modal, 
	View, 
	Text, 
	StyleSheet, 
	SectionList, 
	FlatList, 
	Switch, 
	Dimensions
} from 'react-native'; 
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Item from './Item'; 

const { width, height } = Dimensions.get('screen'); 

export default function Settings(props) {
	const { data, navigation } = props; 

	return (
		<View style={styles.container}>
			<SectionList 
				keyExtractor={(item, index) => item + index}
				sections={data}
		        renderSectionHeader={({ section }) => <Text style={styles.title}>{section.title}</Text>}
		        stickySectionHeadersEnabled={false}
		        renderItem={({ item }) => {
		        	switch(item.title) {
		        		case 'Location': 
		        			return (
		        				<Item 
		        					item={item}
		        					navigate={() => navigation.push('Location')}
		        					RightComponent={<Text style={styles.item_data}>My Location</Text>}
		        					BottomComponent={<Text style={styles.item_data}>Todo: fetch location</Text>}
		        				/>
	        				)
        				case 'Max Distance': 
        					return (
        						<Item
        							item={item}
        							routing={false}
        							RightComponent={<Text style={styles.item_data}>Todo: slider value</Text>}
		        					BottomComponent={
		        						<MultiSlider
											containerStyle={{alignSelf: 'flex-end', paddingRight: 15}}
											sliderLength={320}
											values={[0]}
											min={0}
											max={1}
											selectedStyle={{backgroundColor: 'red'}}
											unselectedStyle={{backgroundColor: 'lightgray'}}
										/>
									}
        						/>
    						)
						case 'Show Me on App': 
							return (
								<Item
        							item={item}
        							routing={false}
        							RightComponent={
        								<Switch 
        									trackColor={{true: 'red', false: 'grey'}}
        									style={styles.item_data}
        									value={true}
        									
    									/>
        							}
        						/>
							)
						case 'Age': 
							return (
								<Item 
									item={item}
									routing={false}
									BottomComponent={
										<MultiSlider
											containerStyle={{alignSelf: 'flex-end', paddingRight: 15}}
											sliderLength={320}
											values={[18, 64]}
											min={18}
											max={64}
											selectedStyle={{backgroundColor: 'red'}}
											unselectedStyle={{backgroundColor: 'lightgray'}}
										/>
									}
								/>
							)
		        		default: 
		        			return (
		        				<Item 
		        					item={item} 
		        					navigate={()=>navigation.push(item.title)}
		        				/>
			    			)
		        	}
        			
        		}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}, 
	title: {
		paddingLeft: 15, 
		color: 'grey', 
		marginTop: 40, 
		marginBottom: 5
	}, 
	item_container: {
		backgroundColor: 'white', 
		minHeight: 50
	}, 
	item_panel_container: {
		flex: 1, 
		flexDirection: 'row', 
		width: '95%', 
		alignSelf: 'flex-end', 
		borderBottomColor: 'lightgrey', 
		borderBottomWidth: 1, 
		marginRight: 5
	}, 
	item_panel_cols: {
		flex: 1, 
		justifyContent: 'center', 
		marginRight: 5
	}, 
	item_panel: {
		flex: 1, 
		flexDirection: 'row'
	}, 
	item: {
		flex: 1, 
		flexDirection: 'column', 
		justifyContent: 'center'
	}, 
	item_title: {
		fontSize: 18, 
		alignSelf: 'flex-start'
	}, 
	item_data: {
		alignSelf: 'flex-end', 
		paddingRight: 5, 
		fontSize: 18, 
		color: 'grey'
	}, 
	item_bottom: {
		flex: 1
	}, 
	icon: {
		alignSelf: 'center', 
		paddingRight: 5, 
		color: 'lightgrey'
	}
})