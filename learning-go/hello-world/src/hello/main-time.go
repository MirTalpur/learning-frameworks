package main

import (
	"fmt"
  "time"
  "os"
  "errors"
)

func main() {
  // also can do this:
  // var args []string
  // args = os.Args
  hourOfDay := time.Now().Hour()
  greeting, err := getGreeting(hourOfDay)
  if err != nil {
    fmt.Println(err)
    os.Exit(1)
  }
  fmt.Println(greeting)
}

func getGreeting(hour int) (string, error){
  var message string
  if hour < 7 {
    err := errors.New("too early for greetings")
    return message, err
  }
  if hour < 12 {
    message = "Good morning"
  } else if hour < 18 {
    message = "Good Afternoon"
  } else {
    message = "Good Evening"
  }
  return message, nil
}
