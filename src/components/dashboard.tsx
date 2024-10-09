"use client"

import { useState, useEffect } from 'react'
import { Bell, Activity, Target, BarChart, Dumbbell, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Mock data and API calls
const mockGoals = [
  { id: 1, name: "Lose 5kg", progress: 60 },
  { id: 2, name: "Run 5km", progress: 80 },
]

const mockWorkouts = [
  { id: 1, name: "Morning Run", duration: "30 mins", calories: 300 },
  { id: 2, name: "Evening Yoga", duration: "45 mins", calories: 150 },
]

const mockRecommendations = [
  "Try HIIT workout for efficient calorie burn",
  "Incorporate more strength training for muscle growth",
]

export function DashboardComponent() {
  const [goals, setGoals] = useState(mockGoals)
  const [workouts, setWorkouts] = useState(mockWorkouts)
  const [recommendations, setRecommendations] = useState(mockRecommendations)

  // Simulating API calls
  useEffect(() => {
    // In a real app, these would be API calls
    setGoals(mockGoals)
    setWorkouts(mockWorkouts)
    setRecommendations(mockRecommendations)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Fitness & Wellness Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Goals Card */}
        <Card>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
            <CardDescription>Track your fitness goals</CardDescription>
          </CardHeader>
          <CardContent>
            {goals.map(goal => (
              <div key={goal.id} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span>{goal.name}</span>
                  <span>{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} />
              </div>
            ))}
            <Button className="w-full mt-4">
              <Target className="mr-2 h-4 w-4" /> Set New Goal
            </Button>
          </CardContent>
        </Card>

        {/* Workouts Card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Workouts</CardTitle>
            <CardDescription>Your latest activities</CardDescription>
          </CardHeader>
          <CardContent>
            {workouts.map(workout => (
              <div key={workout.id} className="flex justify-between items-center mb-4">
                <span>{workout.name}</span>
                <span className="text-sm text-muted-foreground">{workout.duration} | {workout.calories} cal</span>
              </div>
            ))}
            <Button className="w-full mt-4">
              <Activity className="mr-2 h-4 w-4" /> Log Workout
            </Button>
          </CardContent>
        </Card>

        {/* Recommendations Card */}
        <Card>
          <CardHeader>
            <CardTitle>Workout Recommendations</CardTitle>
            <CardDescription>Personalized for you</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              {recommendations.map((rec, index) => (
                <li key={index} className="mb-2">{rec}</li>
              ))}
            </ul>
            <Button className="w-full mt-4">
              <Dumbbell className="mr-2 h-4 w-4" /> Get More Recommendations
            </Button>
          </CardContent>
        </Card>

        {/* Progress Card */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
            <CardDescription>Your fitness journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              <BarChart className="h-32 w-32 text-muted-foreground" />
            </div>
            <Button className="w-full mt-4">
              <BarChart className="mr-2 h-4 w-4" /> View Detailed Progress
            </Button>
          </CardContent>
        </Card>

        {/* Meditation Card */}
        <Card>
          <CardHeader>
            <CardTitle>Mindfulness & Meditation</CardTitle>
            <CardDescription>Nurture your mental wellbeing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-2xl font-semibold">15 minutes</p>
              <p className="text-sm text-muted-foreground">Today's meditation</p>
            </div>
            <Button className="w-full">
              <Heart className="mr-2 h-4 w-4" /> Start Meditation Session
            </Button>
          </CardContent>
        </Card>

        {/* Notifications Card */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Stay updated</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span>Remember to log your workout today!</span>
              </li>
              <li className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span>New meditation session available</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}