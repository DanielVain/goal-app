import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ id, text, onDeleteItem }) {
	return (
		<Pressable
			onPress={onDeleteItem.bind(this, id)}
			style={({ pressed }) => pressed && styles.pressedItem}
		>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{text}</Text>
			</View>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: "white",
	},
});
