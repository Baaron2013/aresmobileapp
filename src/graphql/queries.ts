/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatroom = /* GraphQL */ `
  query GetChatroom($id: ID!) {
    getChatroom(id: $id) {
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
export const listChatrooms = /* GraphQL */ `
  query ListChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChatrooms = /* GraphQL */ `
  query SyncChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatrooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkouts = /* GraphQL */ `
  query GetWorkouts($id: ID!) {
    getWorkouts(id: $id) {
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
export const listWorkoutss = /* GraphQL */ `
  query ListWorkoutss(
    $filter: ModelWorkoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkouts = /* GraphQL */ `
  query SyncWorkouts(
    $filter: ModelWorkoutsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWeeksCompleted = /* GraphQL */ `
  query GetWeeksCompleted($id: ID!) {
    getWeeksCompleted(id: $id) {
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
export const listWeeksCompleteds = /* GraphQL */ `
  query ListWeeksCompleteds(
    $filter: ModelWeeksCompletedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeksCompleteds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWeeksCompleteds = /* GraphQL */ `
  query SyncWeeksCompleteds(
    $filter: ModelWeeksCompletedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeeksCompleteds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTrainingLogs = /* GraphQL */ `
  query GetTrainingLogs($id: ID!) {
    getTrainingLogs(id: $id) {
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
export const listTrainingLogss = /* GraphQL */ `
  query ListTrainingLogss(
    $filter: ModelTrainingLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingLogss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingLogs = /* GraphQL */ `
  query SyncTrainingLogs(
    $filter: ModelTrainingLogsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCalculatorResults = /* GraphQL */ `
  query GetCalculatorResults($id: ID!) {
    getCalculatorResults(id: $id) {
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
export const listCalculatorResultss = /* GraphQL */ `
  query ListCalculatorResultss(
    $filter: ModelCalculatorResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalculatorResultss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCalculatorResults = /* GraphQL */ `
  query SyncCalculatorResults(
    $filter: ModelCalculatorResultsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCalculatorResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getRangerMetrics = /* GraphQL */ `
  query GetRangerMetrics($id: ID!) {
    getRangerMetrics(id: $id) {
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
export const listRangerMetricss = /* GraphQL */ `
  query ListRangerMetricss(
    $filter: ModelRangerMetricsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRangerMetricss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRangerMetrics = /* GraphQL */ `
  query SyncRangerMetrics(
    $filter: ModelRangerMetricsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRangerMetrics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getChatroomUser = /* GraphQL */ `
  query GetChatroomUser($id: ID!) {
    getChatroomUser(id: $id) {
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
export const listChatroomUsers = /* GraphQL */ `
  query ListChatroomUsers(
    $filter: ModelChatroomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatroomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        chatroom {
          id
          newMessages
          Chatters
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatroomUsers = /* GraphQL */ `
  query SyncChatroomUsers(
    $filter: ModelChatroomUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatroomUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        chatroom {
          id
          newMessages
          Chatters
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
