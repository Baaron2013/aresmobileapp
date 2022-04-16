/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatroom = /* GraphQL */ `
  mutation CreateChatroom(
    $input: CreateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    createChatroom(input: $input, condition: $condition) {
      id
      newMessages
      Chatters
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LastMessage {
        id
        content
        userID
        chatroomID
        isRead
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Messages {
        items {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ChatroomUsers {
        items {
          id
          chatroomID
          userID
          newMessages
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateChatroom = /* GraphQL */ `
  mutation UpdateChatroom(
    $input: UpdateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    updateChatroom(input: $input, condition: $condition) {
      id
      newMessages
      Chatters
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LastMessage {
        id
        content
        userID
        chatroomID
        isRead
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Messages {
        items {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ChatroomUsers {
        items {
          id
          chatroomID
          userID
          newMessages
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteChatroom = /* GraphQL */ `
  mutation DeleteChatroom(
    $input: DeleteChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    deleteChatroom(input: $input, condition: $condition) {
      id
      newMessages
      Chatters
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LastMessage {
        id
        content
        userID
        chatroomID
        isRead
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Messages {
        items {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ChatroomUsers {
        items {
          id
          chatroomID
          userID
          newMessages
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createWorkouts = /* GraphQL */ `
  mutation CreateWorkouts(
    $input: CreateWorkoutsInput!
    $condition: ModelWorkoutsConditionInput
  ) {
    createWorkouts(input: $input, condition: $condition) {
      id
      program
      level
      week
      day
      numOfCompletions
      workoutName
      weekCompleted
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkouts = /* GraphQL */ `
  mutation UpdateWorkouts(
    $input: UpdateWorkoutsInput!
    $condition: ModelWorkoutsConditionInput
  ) {
    updateWorkouts(input: $input, condition: $condition) {
      id
      program
      level
      week
      day
      numOfCompletions
      workoutName
      weekCompleted
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkouts = /* GraphQL */ `
  mutation DeleteWorkouts(
    $input: DeleteWorkoutsInput!
    $condition: ModelWorkoutsConditionInput
  ) {
    deleteWorkouts(input: $input, condition: $condition) {
      id
      program
      level
      week
      day
      numOfCompletions
      workoutName
      weekCompleted
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createWeeksCompleted = /* GraphQL */ `
  mutation CreateWeeksCompleted(
    $input: CreateWeeksCompletedInput!
    $condition: ModelWeeksCompletedConditionInput
  ) {
    createWeeksCompleted(input: $input, condition: $condition) {
      id
      program
      level
      week
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWeeksCompleted = /* GraphQL */ `
  mutation UpdateWeeksCompleted(
    $input: UpdateWeeksCompletedInput!
    $condition: ModelWeeksCompletedConditionInput
  ) {
    updateWeeksCompleted(input: $input, condition: $condition) {
      id
      program
      level
      week
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWeeksCompleted = /* GraphQL */ `
  mutation DeleteWeeksCompleted(
    $input: DeleteWeeksCompletedInput!
    $condition: ModelWeeksCompletedConditionInput
  ) {
    deleteWeeksCompleted(input: $input, condition: $condition) {
      id
      program
      level
      week
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTrainingLogs = /* GraphQL */ `
  mutation CreateTrainingLogs(
    $input: CreateTrainingLogsInput!
    $condition: ModelTrainingLogsConditionInput
  ) {
    createTrainingLogs(input: $input, condition: $condition) {
      id
      program
      level
      week
      day
      description
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTrainingLogs = /* GraphQL */ `
  mutation UpdateTrainingLogs(
    $input: UpdateTrainingLogsInput!
    $condition: ModelTrainingLogsConditionInput
  ) {
    updateTrainingLogs(input: $input, condition: $condition) {
      id
      program
      level
      week
      day
      description
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTrainingLogs = /* GraphQL */ `
  mutation DeleteTrainingLogs(
    $input: DeleteTrainingLogsInput!
    $condition: ModelTrainingLogsConditionInput
  ) {
    deleteTrainingLogs(input: $input, condition: $condition) {
      id
      program
      level
      week
      day
      description
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCalculatorResults = /* GraphQL */ `
  mutation CreateCalculatorResults(
    $input: CreateCalculatorResultsInput!
    $condition: ModelCalculatorResultsConditionInput
  ) {
    createCalculatorResults(input: $input, condition: $condition) {
      id
      clean
      bench
      squat
      level
      userID
      levelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCalculatorResults = /* GraphQL */ `
  mutation UpdateCalculatorResults(
    $input: UpdateCalculatorResultsInput!
    $condition: ModelCalculatorResultsConditionInput
  ) {
    updateCalculatorResults(input: $input, condition: $condition) {
      id
      clean
      bench
      squat
      level
      userID
      levelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCalculatorResults = /* GraphQL */ `
  mutation DeleteCalculatorResults(
    $input: DeleteCalculatorResultsInput!
    $condition: ModelCalculatorResultsConditionInput
  ) {
    deleteCalculatorResults(input: $input, condition: $condition) {
      id
      clean
      bench
      squat
      level
      userID
      levelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      userID
      chatroomID
      isRead
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      userID
      chatroomID
      isRead
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      userID
      chatroomID
      isRead
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createRangerMetrics = /* GraphQL */ `
  mutation CreateRangerMetrics(
    $input: CreateRangerMetricsInput!
    $condition: ModelRangerMetricsConditionInput
  ) {
    createRangerMetrics(input: $input, condition: $condition) {
      id
      weight
      sleep
      willingness
      appetite
      soreness
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRangerMetrics = /* GraphQL */ `
  mutation UpdateRangerMetrics(
    $input: UpdateRangerMetricsInput!
    $condition: ModelRangerMetricsConditionInput
  ) {
    updateRangerMetrics(input: $input, condition: $condition) {
      id
      weight
      sleep
      willingness
      appetite
      soreness
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRangerMetrics = /* GraphQL */ `
  mutation DeleteRangerMetrics(
    $input: DeleteRangerMetricsInput!
    $condition: ModelRangerMetricsConditionInput
  ) {
    deleteRangerMetrics(input: $input, condition: $condition) {
      id
      weight
      sleep
      willingness
      appetite
      soreness
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      type
      imageUri
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        items {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chatrooms {
        items {
          id
          chatroomID
          userID
          newMessages
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      type
      imageUri
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        items {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chatrooms {
        items {
          id
          chatroomID
          userID
          newMessages
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      type
      imageUri
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        items {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chatrooms {
        items {
          id
          chatroomID
          userID
          newMessages
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createChatroomUser = /* GraphQL */ `
  mutation CreateChatroomUser(
    $input: CreateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    createChatroomUser(input: $input, condition: $condition) {
      id
      chatroomID
      userID
      newMessages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessages
        Chatters
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        LastMessage {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatroomUsers {
          nextToken
          startedAt
        }
      }
      user {
        id
        name
        email
        type
        imageUri
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateChatroomUser = /* GraphQL */ `
  mutation UpdateChatroomUser(
    $input: UpdateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    updateChatroomUser(input: $input, condition: $condition) {
      id
      chatroomID
      userID
      newMessages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessages
        Chatters
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        LastMessage {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatroomUsers {
          nextToken
          startedAt
        }
      }
      user {
        id
        name
        email
        type
        imageUri
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteChatroomUser = /* GraphQL */ `
  mutation DeleteChatroomUser(
    $input: DeleteChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    deleteChatroomUser(input: $input, condition: $condition) {
      id
      chatroomID
      userID
      newMessages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessages
        Chatters
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        LastMessage {
          id
          content
          userID
          chatroomID
          isRead
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatroomUsers {
          nextToken
          startedAt
        }
      }
      user {
        id
        name
        email
        type
        imageUri
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
      }
    }
  }
`;
