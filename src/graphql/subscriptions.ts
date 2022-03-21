/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom {
    onCreateChatroom {
      id
      newMessages
      Chatter
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
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom {
    onUpdateChatroom {
      id
      newMessages
      Chatter
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
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom {
    onDeleteChatroom {
      id
      newMessages
      Chatter
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
export const onCreateWorkouts = /* GraphQL */ `
  subscription OnCreateWorkouts {
    onCreateWorkouts {
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
export const onUpdateWorkouts = /* GraphQL */ `
  subscription OnUpdateWorkouts {
    onUpdateWorkouts {
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
export const onDeleteWorkouts = /* GraphQL */ `
  subscription OnDeleteWorkouts {
    onDeleteWorkouts {
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
export const onCreateWeeksCompleted = /* GraphQL */ `
  subscription OnCreateWeeksCompleted {
    onCreateWeeksCompleted {
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
export const onUpdateWeeksCompleted = /* GraphQL */ `
  subscription OnUpdateWeeksCompleted {
    onUpdateWeeksCompleted {
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
export const onDeleteWeeksCompleted = /* GraphQL */ `
  subscription OnDeleteWeeksCompleted {
    onDeleteWeeksCompleted {
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
export const onCreateTrainingLogs = /* GraphQL */ `
  subscription OnCreateTrainingLogs {
    onCreateTrainingLogs {
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
export const onUpdateTrainingLogs = /* GraphQL */ `
  subscription OnUpdateTrainingLogs {
    onUpdateTrainingLogs {
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
export const onDeleteTrainingLogs = /* GraphQL */ `
  subscription OnDeleteTrainingLogs {
    onDeleteTrainingLogs {
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
export const onCreateCalculatorResults = /* GraphQL */ `
  subscription OnCreateCalculatorResults {
    onCreateCalculatorResults {
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
export const onUpdateCalculatorResults = /* GraphQL */ `
  subscription OnUpdateCalculatorResults {
    onUpdateCalculatorResults {
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
export const onDeleteCalculatorResults = /* GraphQL */ `
  subscription OnDeleteCalculatorResults {
    onDeleteCalculatorResults {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      content
      userID
      chatroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      content
      userID
      chatroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      content
      userID
      chatroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRangerMetrics = /* GraphQL */ `
  subscription OnCreateRangerMetrics {
    onCreateRangerMetrics {
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
export const onUpdateRangerMetrics = /* GraphQL */ `
  subscription OnUpdateRangerMetrics {
    onUpdateRangerMetrics {
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
export const onDeleteRangerMetrics = /* GraphQL */ `
  subscription OnDeleteRangerMetrics {
    onDeleteRangerMetrics {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatroomUser = /* GraphQL */ `
  subscription OnCreateChatroomUser {
    onCreateChatroomUser {
      id
      chatroomID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessages
        Chatter
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
export const onUpdateChatroomUser = /* GraphQL */ `
  subscription OnUpdateChatroomUser {
    onUpdateChatroomUser {
      id
      chatroomID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessages
        Chatter
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
export const onDeleteChatroomUser = /* GraphQL */ `
  subscription OnDeleteChatroomUser {
    onDeleteChatroomUser {
      id
      chatroomID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessages
        Chatter
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
