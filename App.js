import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, FlatList, View } from 'react-native';

// Dummy data for courses
const courses = [
  { id: '1', title: 'Introduction to Python', skill: 'Beginner' },
  { id: '2', title: 'Web Development Basics', skill: 'Intermediate' },
  { id: '3', title: 'Public Speaking Essentials', skill: 'Advanced' },
  { id: '4', title: 'Entrepreneurship 101', skill: 'Beginner' },
];

// Individual Course Component
const CourseItem = ({ title, skill }) => (
  <View style={styles.courseItem}>
    <Text style={styles.courseTitle}>{title}</Text>
    <Text style={styles.courseSkill}>Skill Level: {skill}</Text>
  </View>
);

const App = () => {
  const [userSkillLevel, setUserSkillLevel] = useState(null);

  const filterCourses = (level) => {
    setUserSkillLevel(level);
  };

  const filteredCourses = userSkillLevel
    ? courses.filter(course => course.skill === userSkillLevel)
    : courses;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to SkillHaven</Text>
      <Text style={styles.subHeader}>Select your skill level to get personalized courses:</Text>

      {/* Buttons for filtering courses based on skill level */}
      <View style={styles.buttonsContainer}>
        <Button title="Beginner" onPress={() => filterCourses('Beginner')} />
        <Button title="Intermediate" onPress={() => filterCourses('Intermediate')} />
        <Button title="Advanced" onPress={() => filterCourses('Advanced')} />
        <Button title="Clear Filter" onPress={() => setUserSkillLevel(null)} />
      </View>

      {/* Course List */}
      <FlatList
        data={filteredCourses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CourseItem title={item.title} skill={item.skill} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  courseItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseSkill: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default App;
