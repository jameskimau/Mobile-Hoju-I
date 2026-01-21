import { createHomeStyles } from "@/assets/home.styles";
import Header from "@/components/Header";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  // HOOKS
  const todos = useQuery(api.todos.getTodos);
  console.log("Todos:", todos);

  const addTodo = useMutation(api.todos.addTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const homeStyles = createHomeStyles(colors);

  // BUILD UI
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        {/* 나중에 특징 제대로 봐야함 */}
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text style={{ color: homeStyles.title.color, fontSize: 24 }}>
            Press Me
          </Text>
        </TouchableOpacity>
        {/* ADD THE TODO */}
        <TouchableOpacity onPress={() => addTodo({ text: "New Todo" })}>
          <Text style={{ color: homeStyles.title.color, fontSize: 24 }}>
            Add a new Todo
          </Text>
        </TouchableOpacity>
        {/* CLEAR ALL TODO */}
        <TouchableOpacity onPress={() => clearAllTodos()}>
          <Text style={{ color: homeStyles.title.color, fontSize: 24 }}>
            Clear All Todos
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
// 왜 이딴식으로 외부에서 주입받아야하는가?
// CREATE STYLE COMPONENT
const createStyles = (color: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color.bg,
      textAlignVertical: "center",
      gap: 20,
    },
    content: {
      fontSize: 52,
      color: "white",
    },
  });
  return styles;
};
