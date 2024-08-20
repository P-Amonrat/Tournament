export const singleData = [
  {
    id: 1,
    nextMatchId: 5,
    tournamentRoundText: '1',
    startTime: '2021-05-01',
    state: 'SCORE_DONE',
    participants: [
      {
        id: '001',
        resultText: '2',
        isWinner: true,
        status: 'PLAYED',
        name: 'Team 1',
        picture: '../assests/image/team-logo.png',
        score: 2
      },
      {
        id: '002',
        resultText: '2',
        isWinner: false,
        status: 'PLAYED',
        name: 'Team 2',
        picture: '../assests/image/team-logo.png',
        score: 1
      },

    ],
  },
  {
    id: 2,
    nextMatchId: 5,
    tournamentRoundText: '1',
    startTime: '2021-05-01',
    state: 'NO_SHOWS',
    participants: [
      {
        id: '003',
        resultText: '2',
        isWinner: false,
        status: 'PLAYED',
        name: 'Team 3',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
      {
        id: '004',
        resultText: '2',
        isWinner: true,
        status: 'PLAYED',
        name: 'Team 4',
        picture: '../assests/image/team-logo.png',
        score: 2
      },
    ],
  },

  {
    id: 3,
    nextMatchId: 6,
    tournamentRoundText: '1',
    startTime: '2021-05-30',
    state: 'SCHEDULED',
    participants: [
      {
        id: '005',
        resultText: "0",
        isWinner: false,
        status: null,
        name: 'Team 5',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
      {
        id: '006',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 6',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
    ],
  },

  {
    id: 4,
    nextMatchId: 6,
    tournamentRoundText: '1r',
    startTime: '2021-05-30',
    state: '',
    participants: [
      {
        id: '007',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 7',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
      {
        id: '008',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 8',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
    ],
  },
  {
    id: 5,
    nextMatchId: 7,
    tournamentRoundText: '',
    startTime: '',
    state: 'SCHEDULED',
    participants: [
      {
        id: '001',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 1',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
      {
        id: '004',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 4',
        picture: '../assests/image/team-logo.png',
        score: 0
      },
    ],
  },
  {
    id: 6,
    nextMatchId: 7,
    tournamentRoundText: '2',
    startTime: '2021-05-03',
    state: 'SCHEDULED',
    participants: [
      //   {
      //   id: '007',
      //   resultText: null,
      //   isWinner: false,
      //   status: null,
      //   name: 'Team 7',
      //   picture: '../assests/image/team-logo.png',
      //   score: 0
      // },
      // {
      //   id: '008',
      //   resultText: null,
      //   isWinner: false,
      //   status: null,
      //   name: 'Team 8',
      //   picture: '../assests/image/team-logo.png',
      //   score: 0
      // },
    ],
  },
  {
    id: 7,
    nextMatchId: null,
    tournamentRoundText: '',
    startTime: '2021-05-30',
    state: 'SCHEDULED',
    participants: [],
  }
];

export const smallSingleData = [{
  id: 8,
  name: 'LB R1 M1',
  nextMatchId: 10,
  nextLooserMatchId: undefined,
  startTime: '',
  tournamentRound: 'R1',
  state: 'WALK_OVER',
  participants: [
    {
      id: '19abab76-3c82-40e9-a334-4f57cb81bd08',
      resultText: '',
      isWinner: true,
      status: 'WALK_OVER',
      name: '#4',
    },
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: '--------------',
    },
  ],
},
{
  id: 9,
  name: 'LB R1 M2',
  nextMatchId: 11,
  nextLooserMatchId: undefined,
  startTime: '',
  tournamentRound: 'R1',
  state: 'WALK_OVER',
  participants: [
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: '--------------',
    },
    {
      id: '4c07d93a-f7e9-4b84-bda3-27c08c689f90',
      resultText: '',
      isWinner: true,
      status: 'WALK_OVER',
      name: '#6',
    },
  ],
},
{
  id: 10,
  name: 'LB R2 M1',
  nextMatchId: 12,
  nextLooserMatchId: undefined,
  startTime: '2021-07-27T17:00:00+00:00',
  tournamentRound: 'R2',
  state: 'SCORE_DONE',
  participants: [
    {
      id: '4a05a091-f7b6-4a9a-b6eb-b7ff8ea6dc87',
      resultText: '',
      isWinner: false,
      status: 'PLAYED',
      name: '#2',
    },
    {
      id: '19abab76-3c82-40e9-a334-4f57cb81bd08',
      resultText: '',
      isWinner: false,
      status: 'PLAYED',
      name: '#4',
    },
  ],
},
{
  id: 11,
  name: 'LB R2 M2',
  nextMatchId: 12,
  nextLooserMatchId: undefined,
  startTime: '2021-07-27T18:00:00+00:00',
  tournamentRound: 'R2',
  state: 'SCORE_DONE',
  participants: [
    {
      id: 'b4ecc604-1248-4265-895a-af918e27b6ff',
      resultText: '',
      isWinner: true,
      status: 'PLAYED',
      name: '#5',
    },
    {
      id: '4c07d93a-f7e9-4b84-bda3-27c08c689f90',
      resultText: '',
      isWinner: false,
      status: 'PLAYED',
      name: '#6',
    },
  ],
},
{
  id: 12,
  name: 'LB R3 M1',
  nextMatchId: 13,
  nextLooserMatchId: undefined,
  startTime: '',
  tournamentRound: 'R3',
  state: 'SCORE_DONE',
  participants: [
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'TBD',
    },
    {
      id: 'b4ecc604-1248-4265-895a-af918e27b6ff',
      resultText: '',
      isWinner: false,
      status: 'PLAYED',
      name: '#5',
    },
  ],
},
{
  id: 13,
  name: 'LB R4 M1',
  nextMatchId: 14,
  nextLooserMatchId: undefined,
  startTime: '',
  tournamentRound: 'R4',
  state: 'SCORE_DONE',
  participants: [
    {
      id: 'ef66d820-1e28-4ef6-81e6-0835b2df5236',
      resultText: '',
      isWinner: false,
      status: 'PLAYED',
      name: '#3',
    },
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'TBD',
    },
  ],
},
{
  id: 14,
  name: 'LB R5 M1',
  nextMatchId: 15,
  nextLooserMatchId: 15,
  startTime: '',
  tournamentRound: 'R5',
  state: 'SCORE_DONE',
  participants: [
    {
      id: 'ddfee063-adde-4192-95d2-203eb2ebb8f7',
      resultText: '',
      isWinner: false,
      status: 'PLAYED',
      name: '#1',
    },
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'TBD',
    },
  ],
},
{
  id: 15,
  name: 'LB R6 M1',
  nextMatchId: null,
  nextLooserMatchId: undefined,
  startTime: '',
  tournamentRound: 'R6',
  state: 'SCORE_DONE',
  participants: [
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'TBD',
    },
    {
      id: '',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'TBD',
    },
  ],
},];

export const fiveTeamsData = [
  {
    id: 1,
    nextMatchId: 3,
    tournamentRoundText: "1",
    startTime: "2024-07-18",
    state: "SCHEDULED",
    participants: [
      {
        id: "001",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 1",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "002",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 2",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  {
    id: 2,
    nextMatchId: 4,
    tournamentRoundText: "1",
    startTime: "2024-07-19",
    state: "SCHEDULED",
    participants: [
      {
        id: "003",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 3",
        picture: "../assets/image/team-logo.png",
        score: null
      },
    ]
  },
  {
    id: 3,
    nextMatchId: 4,
    tournamentRoundText: "2",
    startTime: "2024-07-20",
    state: "SCHEDULED",
    participants: [
      {
        id: "004",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 4",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "005",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 5",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  {
    id: 4,
    nextMatchId: null,
    tournamentRoundText: "3",
    startTime: "2024-07-21",
    state: "SCHEDULED",
    participants: [

    ]
  },
]

export const sixTeamsData = [
  // Round 1: Matches
  {
    id: 1,
    nextMatchId: 3, // Link to Round 2 match
    tournamentRoundText: "1",
    startTime: "2024-07-18",
    state: "SCHEDULED",
    participants: [
      {
        id: "001",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 1",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "002",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 2",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  {
    id: 2,
    nextMatchId: 4, // Link to Round 2 match
    tournamentRoundText: "1",
    startTime: "2024-07-19",
    state: "SCHEDULED",
    participants: [
      {
        id: "003",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 3",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "004",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 4",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  {
    id: 3,
    nextMatchId: 5, // Link to Round 2 match
    tournamentRoundText: "1",
    startTime: "2024-07-20",
    state: "SCHEDULED",
    participants: [
      {
        id: "005",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 5",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "006",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 6",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  // Round 2: Matches
  {
    id: 4,
    nextMatchId: 5, // Link to Final Round match
    tournamentRoundText: "2",
    startTime: "2024-07-21",
    state: "SCHEDULED",
    participants: [
      {
        id: "001", // Winner of Match 1
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 1",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "003", // Winner of Match 2
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 3",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  {
    id: 5,
    nextMatchId: null, // Link to Final Round match
    tournamentRoundText: "2",
    startTime: "2024-07-21",
    state: "SCHEDULED",
    participants: [
      {
        id: "002", // Winner of Match 1
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 2",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "004", // Winner of Match 2
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 4",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  // Final Round
  {
    id: 6,
    nextMatchId: 7, // No further matches
    tournamentRoundText: "3",
    startTime: "2024-07-22",
    state: "SCHEDULED",
    participants: [
      {
        id: "005", // Winner of Match 3
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 5",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "006", // Winner of Match 4
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 6",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  },
  {
    id: 7,
    nextMatchId: null, // No further matches
    tournamentRoundText: "3",
    startTime: "2024-07-22",
    state: "SCHEDULED",
    participants: [
      {
        id: "005", // Winner of Match 3
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 5",
        picture: "../assets/image/team-logo.png",
        score: null
      },
      {
        id: "006", // Winner of Match 4
        resultText: null,
        isWinner: false,
        status: null,
        name: "Team 6",
        picture: "../assets/image/team-logo.png",
        score: null
      }
    ]
  }
];




export const soloWalk = [
  {
    id: 1,
    name: 'Round 1 - Match 1',
    nextLooserMatchId: undefined,
    nextMatchId: 5,
    participants: [
      {
        id: '1d11ce35-de11-49de-b48e-cec5427eb82c',
        isWinner: true,
        name: 'Alex',
        resultText: '1',
        status: 'PLAYED',
        score: 3
      },
      {
        id: 'a504c49a-e9b2-4a2e-b4b8-a2c11651c356',
        isWinner: false,
        name: 'Mike',
        resultText: '0',
        status: 'PLAYED',
        score: 2
      }
    ],
    startTime: '2021-07-27T23:00:00.000+00:00',
    state: 'SCORE_DONE',
    tournamentRoundText: '1'
  },
  {
    id: 2,
    name: 'Semi Final - Match 1',
    nextLooserMatchId: undefined,
    nextMatchId: 5,
    participants: [
      {
        id: '002',
        isWinner: true,
        name: 'XCV',
        resultText: 'NS',
        status: 'NO_SHOW'
      }
    ],
    startTime: '2021-07-28T00:00:00.000+00:00',
    state: 'SCORE_DONE',
    tournamentRoundText: '2'
  },
  {
    id: 3,
    name: 'Round 1 - Match 2',
    nextLooserMatchId: undefined,
    nextMatchId: 6,
    participants: [
      {
        id: '9fd1f0e6-eb92-4159-a96d-6657fbdd963e',
        isWinner: true,
        name: 'GlootOne',
        resultText: 'WO',
        status: null
      }
    ],
    startTime: '2021-07-27T23:00:00.000+00:00',
    state: 'WALK_OVER',
    tournamentRoundText: '1'
  },
  {
    id: 4,
    name: 'Semi Final - Match 2',
    nextLooserMatchId: undefined,
    nextMatchId: 6,
    participants: [
      {
        id: '7535778a-24db-423f-928b-ca237cff67fc',
        isWinner: true,
        name: 'SeatloN',
        resultText: 'NS',
        status: 'NO_SHOW'
      }
    ],
    startTime: '2021-07-28T00:00:00.000+00:00',
    state: 'WALK_OVER',
    tournamentRoundText: '2'
  },
  {
    id: 5,
    name: 'Round 1 - Match 3',
    nextLooserMatchId: undefined,
    nextMatchId: 7,
    participants: [
      {
        id: 'b9a3cc7a-95d9-483a-b515-f24bd0531f45',
        isWinner: false,
        name: 'Alex',
        resultText: 'WO',
        status: null
      }
    ],
    startTime: '2021-07-27T23:00:00.000+00:00',
    state: 'WALK_OVER',
    tournamentRoundText: '1'
  },
  {
    id: 6,
    name: 'Round 1 - Match 4',
    nextLooserMatchId: undefined,
    nextMatchId: 7,
    participants: [
      {
        id: '7535778a-24db-423f-928b-ca237cff67fc',
        isWinner: false,
        name: 'GlootOne',
        resultText: 'WO',
        status: null
      },
      {
        id: '7535778a-24db-423f-928b-ca237cff67fc',
        isWinner: false,
        name: 'SeatloN',
        resultText: 'WO',
        status: null
      }
    ],
    startTime: '2021-07-27T23:00:00.000+00:00',
    state: 'WALK_OVER',
    tournamentRoundText: '1'
  },
  {
    id: 7,
    name: 'Final - Match',
    nextLooserMatchId: undefined,
    nextMatchId: null,
    participants: [

    ],
    startTime: '2021-07-28T01:00:00.000+00:00',
    state: 'DONE',
    tournamentRoundText: '3'
  }
]

export const simpleBracket = {
  lower: [
    {
      id: 20502,
      name: 'LB Semi Final',
      nextMatchId: 20515,
      nextLooserMatchId: undefined,
      tournamentRoundText: 'LB 4',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'a3c107d2-ded2-4f33-85e7-2215805f664b',
          resultText: '1',
          isWinner: false,
          status: 'PLAYED',
          name: 'BTC',
        },
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
      ],
    },
    {
      id: 20503,
      name: 'LB 1.2',
      nextMatchId: 20506,
      nextLooserMatchId: undefined,
      tournamentRoundText: 'LB 1',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'dd6c4bff-80da-449c-8bfa-24c835af013a',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'OmarDev',
        },
        {
          id: 'fabb2218-49d6-41a2-874c-d6cd6928df70',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'jackieboi',
        },
      ],
    },
    {
      id: 20504,
      name: 'LB 2.1',
      nextMatchId: 20507,
      nextLooserMatchId: undefined,
      tournamentRoundText: 'LB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
        {
          id: 'e1e48aad-5e29-41dc-b904-16f152a7ec74',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'spacefudg3',
        },
      ],
    },
    {
      id: 20505,
      name: 'LB 1.1',
      nextMatchId: 20504,
      nextLooserMatchId: undefined,
      tournamentRoundText: 'LB 1',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'e1e48aad-5e29-41dc-b904-16f152a7ec74',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'spacefudg3',
        },
        {
          id: '12046e66-adbf-49d9-98c1-bed16d5ced29',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'Alex',
        },
      ],
    },
    {
      id: 20506,
      name: 'LB 2.2',
      nextMatchId: 20507,
      nextLooserMatchId: undefined,
      tournamentRoundText: 'LB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'fabb2218-49d6-41a2-874c-d6cd6928df70',
          resultText: '1',
          isWinner: false,
          status: 'PLAYED',
          name: 'jackieboi',
        },
        {
          id: '8cf422cd-a99d-4184-b2cd-70ee481f46b3',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'GlootOne',
        },
      ],
    },
    {
      id: 20507,
      name: 'LB 3.1',
      nextMatchId: 20502,
      nextLooserMatchId: undefined,
      tournamentRoundText: 'LB 3',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
        {
          id: '8cf422cd-a99d-4184-b2cd-70ee481f46b3',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'GlootOne',
        },
      ],
    },
  ],
}

export const twelveTeamsData = [
  {
    id: 1,
    nextMatchId: 9,
    tournamentRoundText: '1',
    startTime: '2024-07-18',
    state: 'SCHEDULED',
    participants: [
      {
        id: '001',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 1',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 2,
    nextMatchId: 9,
    tournamentRoundText: '1',
    startTime: '2024-07-19',
    state: 'SCHEDULED',
    participants: [
      {
        id: '002',
        resultText: null,
        isWinner: true,
        status: null,
        name: 'Team 2',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '003',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 3',
        picture: '../assets/image/team-logo.png',
        score: null
      }
    ]
  },
  {
    id: 3,
    nextMatchId: 10,
    tournamentRoundText: '1',
    startTime: '2024-07-20',
    state: 'SCHEDULED',
    participants: [
      {
        id: '004',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 4',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '005',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 5',
        picture: '../assets/image/team-logo.png',
        score: null
      }
    ]
  },
  {
    id: 4,
    nextMatchId: 10,
    tournamentRoundText: '1',
    startTime: '2024-07-21',
    state: 'SCHEDULED',
    participants: [
      {
        id: '006',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 6',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },

    ]
  },
  {
    id: 5,
    nextMatchId: 11,
    tournamentRoundText: '1',
    startTime: '2024-07-22',
    state: 'SCHEDULED',
    participants: [
      {
        id: '007',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 7',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },

    ]
  },
  {
    id: 6,
    nextMatchId: 11,
    tournamentRoundText: '1',
    startTime: '2024-07-23',
    state: 'SCHEDULED',
    participants: [
      {
        id: '008',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 9',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '009',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 10',
        picture: '../assets/image/team-logo.png',
        score: null
      },
    ]
  },
  {
    id: 7,
    nextMatchId: 12,
    tournamentRoundText: '2',
    startTime: '2024-07-24',
    state: 'SCHEDULED',
    participants: [
      {
        id: '010',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 10',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '011',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 11',
        picture: '../assets/image/team-logo.png',
        score: null
      }
    ]
  },
  {
    id: 8,
    nextMatchId: 12,
    tournamentRoundText: '2',
    startTime: '2024-07-25',
    state: 'SCHEDULED',
    participants: [
      {
        id: '012',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 12',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      }]
  },
  {
    id: 9,
    nextMatchId: 13,
    tournamentRoundText: '2',
    startTime: '2024-07-26',
    state: 'SCHEDULED',
    participants: [
      {
        id: '001',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 1',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '001',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 2',
        picture: '../assets/image/team-logo.png',
        score: ''
      }
    ]
  },
  {
    id: 10,
    nextMatchId: 13,
    tournamentRoundText: '3',
    startTime: '2024-07-27',
    state: 'SCHEDULED',
    participants: [{
      id: '006',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'Team 6',
      picture: '../assets/image/team-logo.png',
      score: ''
    },]
  },
  {
    id: 11,
    nextMatchId: 14,
    tournamentRoundText: '4',
    startTime: '2024-07-28',
    state: 'SCHEDULED',
    participants: [{
      id: '007',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'Team 7',
      picture: '../assets/image/team-logo.png',
      score: ''
    },]
  },
  {
    id: 12,
    nextMatchId: 14,
    tournamentRoundText: '4',
    startTime: '2024-07-28',
    state: 'SCHEDULED',
    participants: [{
      id: '012',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'Team 12',
      picture: '../assets/image/team-logo.png',
      score: ''
    }]
  },
  {
    id: 13,
    nextMatchId: 15,
    tournamentRoundText: '4',
    startTime: '2024-07-28',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 14,
    nextMatchId: 15,
    tournamentRoundText: '4',
    startTime: '2024-07-28',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 15,
    nextMatchId: null,
    tournamentRoundText: '4',
    startTime: '2024-07-28',
    state: 'SCHEDULED',
    participants: []
  }
];

export const twentyTeamsData = [
  {
    id: 1,
    nextMatchId: 17,
    tournamentRoundText: '1',
    startTime: '2024-07-18',
    state: 'SCHEDULED',
    participants: [
      {
        id: '001',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 1',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      }
    ]
  },
  {
    id: 2,
    nextMatchId: 17,
    tournamentRoundText: '1',
    startTime: '2024-07-19',
    state: 'SCHEDULED',
    participants: [
      {
        id: '002',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 2',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      }
    ]
  },
  {
    id: 3,
    nextMatchId: 18,
    tournamentRoundText: '1',
    startTime: '2024-07-20',
    state: 'SCHEDULED',
    participants: [
      {
        id: '003',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 3',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 4,
    nextMatchId: 18,
    tournamentRoundText: '1',
    startTime: '2024-07-21',
    state: 'SCHEDULED',
    participants: [
      {
        id: '004',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 4',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '005',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 5',
        picture: '../assets/image/team-logo.png',
        score: null
      }
    ]
  },
  {
    id: 5,
    nextMatchId: 19,
    tournamentRoundText: '1',
    startTime: '2024-07-22',
    state: 'SCHEDULED',
    participants: [
      {
        id: '006',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 6',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '007',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 7',
        picture: '../assets/image/team-logo.png',
        score: null
      },
    ]
  },
  {
    id: 6,
    nextMatchId: 19,
    tournamentRoundText: '1',
    startTime: '2024-07-23',
    state: 'SCHEDULED',
    participants: [
      {
        id: '008',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 8',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 7,
    nextMatchId: 20,
    tournamentRoundText: '1',
    startTime: '2024-07-24',
    state: 'SCHEDULED',
    participants: [
      {
        id: '009',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 9',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      }
    ]
  },
  {
    id: 8,
    nextMatchId: 20,
    tournamentRoundText: '1',
    startTime: '2024-07-25',
    state: 'SCHEDULED',
    participants: [
      {
        id: '010',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 10',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 9,
    nextMatchId: 21,
    tournamentRoundText: '1',
    startTime: '2024-07-26',
    state: 'SCHEDULED',
    participants: [
      {
        id: '011',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 11',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 10,
    nextMatchId: 21,
    tournamentRoundText: '1',
    startTime: '2024-07-27',
    state: 'SCHEDULED',
    participants: [
      {
        id: '012',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 12',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 11,
    nextMatchId: 22,
    tournamentRoundText: '1',
    startTime: '2024-07-28',
    state: 'SCHEDULED',
    participants: [
      {
        id: '013',
        resultText: "Bye",
        isWinner: true,
        status: null,
        name: 'Team 13',
        picture: '../assets/image/team-logo.png',
        score: "Bye"
      },
    ]
  },
  {
    id: 12,
    nextMatchId: 22,
    tournamentRoundText: '1',
    startTime: '2024-07-29',
    state: 'SCHEDULED',
    participants: [
      {
        id: '014',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 14',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '015',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 15',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
    ]
  },
  {
    id: 13,
    nextMatchId: 23,
    tournamentRoundText: '2',
    startTime: '2024-07-30',
    state: 'SCHEDULED',
    participants: [
      {
        id: '016',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 16',
        picture: '../assets/image/team-logo.png',
        score: null
      },
      {
        id: '017',
        resultText: null,
        isWinner: false,
        status: null,
        name: 'Team 17',
        picture: '../assets/image/team-logo.png',
        score: null
      },
    ]
  },
  {
    id: 14,
    nextMatchId: 23,
    tournamentRoundText: '2',
    startTime: '2024-07-31',
    state: 'SCHEDULED',
    participants: [
      {
        id: '018',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 18',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      }
    ]
  },
  {
    id: 15,
    nextMatchId: 24,
    tournamentRoundText: '2',
    startTime: '2024-08-01',
    state: 'SCHEDULED',
    participants: [
      {
        id: '019',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 19',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 16,
    nextMatchId: 24,
    tournamentRoundText: '2',
    startTime: '2024-08-02',
    state: 'SCHEDULED',
    participants: [
      {
        id: '020',
        resultText: 'Bye',
        isWinner: true,
        status: null,
        name: 'Team 20',
        picture: '../assets/image/team-logo.png',
        score: 'Bye'
      },
    ]
  },
  {
    id: 17,
    nextMatchId: 25,
    tournamentRoundText: '2',
    startTime: '2024-08-03',
    state: 'SCHEDULED',
    participants: [
      {
        id: '001',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 1',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '002',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 2',
        picture: '../assets/image/team-logo.png',
        score: ''
      }
    ]
  },
  {
    id: 18,
    nextMatchId: 25,
    tournamentRoundText: '2',
    startTime: '2024-08-04',
    state: 'SCHEDULED',
    participants: [
      {
        id: '003',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 3',
        picture: '../assets/image/team-logo.png',
        score: ''
      }
    ]
  },
  {
    id: 19,
    nextMatchId: 26,
    tournamentRoundText: '3',
    startTime: '2024-08-05',
    state: 'SCHEDULED',
    participants: [
      {
        id: '000',
        resultText: '',
        isWinner: false,
        status: null,
        name: '',
        picture: '../assets/image/team-logo.png',
        score: ''
      }, {
        id: '008',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 3',
        picture: '../assets/image/team-logo.png',
        score: ''
      }]
  },
  {
    id: 20,
    nextMatchId: 26,
    tournamentRoundText: '3',
    startTime: '2024-08-06',
    state: 'SCHEDULED',
    participants: [
      {
        id: '009',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 9',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '010',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 10',
        picture: '../assets/image/team-logo.png',
        score: 'ye'
      },
    ]
  },
  {
    id: 21,
    nextMatchId: 27,
    tournamentRoundText: '4',
    startTime: '2024-08-07',
    state: 'SCHEDULED',
    participants: [
      {
        id: '011',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 11',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '012',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 12',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
    ]
  },
  {
    id: 22,
    nextMatchId: 27,
    tournamentRoundText: '4',
    startTime: '2024-08-08',
    state: 'SCHEDULED',
    participants: [
      {
        id: '000',
        resultText: '',
        isWinner: false,
        status: null,
        name: '',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '013',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 13',
        picture: '../assets/image/team-logo.png',
        score: ''
      }]
  },
  {
    id: 23,
    nextMatchId: 28,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: [
      {
        id: '000',
        resultText: '',
        isWinner: false,
        status: null,
        name: '',
        picture: '../assets/image/team-logo.png',
        score: ''
      },
      {
        id: '018',
        resultText: '',
        isWinner: false,
        status: null,
        name: 'Team 18',
        picture: '../assets/image/team-logo.png',
        score: ''
      }
    ]
  },
  {
    id: 24,
    nextMatchId: 28,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: [{
      id: '019',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'Team 19',
      picture: '../assets/image/team-logo.png',
      score: ''
    },
    {
      id: '020',
      resultText: '',
      isWinner: false,
      status: null,
      name: 'Team 20',
      picture: '../assets/image/team-logo.png',
      score: ''
    },
    ]
  },
  {
    id: 25,
    nextMatchId: 29,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 26,
    nextMatchId: 29,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 27,
    nextMatchId: 30,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 28,
    nextMatchId: 30,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 29,
    nextMatchId: 31,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 30,
    nextMatchId: 31,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  },
  {
    id: 31,
    nextMatchId: null,
    tournamentRoundText: '5',
    startTime: '2024-08-09',
    state: 'SCHEDULED',
    participants: []
  }
];

export const mockData = [
  {
    id: 1, nextMatchId: 2, tournamentRoundText: "1", startTime: "2024-07-19", state: "SCHEDULED", participants: [
      { id: "001", resultText: "Bye", isWinner: true, status: null, name: "Team 1", picture: "../assets/image/team-logo.png", score: "Bye" },
      { id: "002", resultText: null, isWinner: false, status: null, name: "Team 2", picture: "../assets/image/team-logo.png", score: null }]
  },
  {
    id: 2, nextMatchId: 3, tournamentRoundText: "2", startTime: "2024-07-20", state: "SCHEDULED", participants: [
      { id: "003", resultText: "Bye", isWinner: true, status: null, name: "Team 3", picture: "../assets/image/team-logo.png", score: "Bye" },
      { id: "004", resultText: null, isWinner: false, status: null, name: "Team 4", picture: "../assets/image/team-logo.png", score: null }]
  },
  {
    id: 3, nextMatchId: 4, tournamentRoundText: "3", startTime: "2024-07-21", state: "SCHEDULED", participants: [
      { id: "005", resultText: "Bye", isWinner: true, status: null, name: "Team 5", picture: "../assets/image/team-logo.png", score: "Bye" },
      { id: "006", resultText: null, isWinner: false, status: null, name: "Team 6", picture: "../assets/image/team-logo.png", score: null }]
  },
  {
    id: 4, nextMatchId: 5, tournamentRoundText: "4", startTime: "2024-07-22", state: "SCHEDULED", participants: [
      { id: "007", resultText: "Bye", isWinner: true, status: null, name: "Team 7", picture: "../assets/image/team-logo.png", score: "Bye" },
      { id: "008", resultText: null, isWinner: false, status: null, name: "Team 8", picture: "../assets/image/team-logo.png", score: null }]
  },
  {
    id: 5, nextMatchId: 6, tournamentRoundText: "5", startTime: "2024-07-23", state: "SCHEDULED", participants: [
      { id: "009", resultText: "Bye", isWinner: true, status: null, name: "Team 9", picture: "../assets/image/team-logo.png", score: "Bye" },
      { id: "010", resultText: null, isWinner: false, status: null, name: "Team 10", picture: "../assets/image/team-logo.png", score: null }]
  },
  {
    id: 6, nextMatchId: 7, tournamentRoundText: "6", startTime: "2024-07-24", state: "SCHEDULED", participants: [
      { id: "011", resultText: "Bye", isWinner: true, status: null, name: "Team 11", picture: "../assets/image/team-logo.png", score: "Bye" },
      { id: "012", resultText: null, isWinner: false, status: null, name: "Team 12", picture: "../assets/image/team-logo.png", score: null }]
  },
  { id: 7, nextMatchId: 8, tournamentRoundText: "2", startTime: "2024-07-26", state: "SCHEDULED", participants: [] },
  { id: 8, nextMatchId: 9, tournamentRoundText: "2", startTime: "2024-07-26", state: "SCHEDULED", participants: [] },
  { id: 9, nextMatchId: 10, tournamentRoundText: "2", startTime: "2024-07-26", state: "SCHEDULED", participants: [] },
  { id: 10, nextMatchId: 11, tournamentRoundText: "2", startTime: "2024-07-26", state: "SCHEDULED", participants: [] },
  { id: 11, nextMatchId: 12, tournamentRoundText: "3", startTime: "2024-07-27", state: "SCHEDULED", participants: [] },
  { id: 12, nextMatchId: 13, tournamentRoundText: "3", startTime: "2024-07-27", state: "SCHEDULED", participants: [] },
  { id: 13, nextMatchId: 14, tournamentRoundText: "3", startTime: "2024-07-27", state: "SCHEDULED", participants: [] },
  { id: 14, nextMatchId: 15, tournamentRoundText: "3", startTime: "2024-07-27", state: "SCHEDULED", participants: [] },
  { id: 15, nextMatchId: 16, tournamentRoundText: "4", startTime: "2024-07-28", state: "SCHEDULED", participants: [] },
  { id: 16, nextMatchId: 17, tournamentRoundText: "4", startTime: "2024-07-28", state: "SCHEDULED", participants: [] },
  { id: 17, nextMatchId: 18, tournamentRoundText: "4", startTime: "2024-07-28", state: "SCHEDULED", participants: [] },
  { id: 18, nextMatchId: null, tournamentRoundText: "4", startTime: "2024-07-28", state: "SCHEDULED", participants: [] }]
