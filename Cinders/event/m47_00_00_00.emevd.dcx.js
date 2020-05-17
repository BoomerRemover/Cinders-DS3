// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    InitializeEvent(0, 14700010, 0); // Setup
    
    // Companions
    InitializeCommonEvent(20080000, 4700850, 14700850) // Setup - Solaire of Astora
    InitializeCommonEvent(20080001, 4700850, 14700850, 160760000, 160760217) // Summon - Solaire of Astora

    InitializeCommonEvent(20080000, 4700851, 14700851) // Setup - El Crabbo
    InitializeCommonEvent(20080001, 4700851, 14700851, 160760001, 160761100) // Summon - El Crabbo
    
    InitializeCommonEvent(20080000, 4700852, 14700852) // Setup - Wolf
    InitializeCommonEvent(20080001, 4700852, 14700852, 160760002, 160761110) // Summon - Wolf
    
    // Curses
    InitializeCommonEvent(20081000, 4705750, 25000005); // Curse of Attraction
    InitializeCommonEvent(20081010, 4705760, 250001002, 25000004); // Curse of Pride
    InitializeCommonEvent(20081010, 4705760, 250001102, 25000003); // Curse of Wrath
    InitializeCommonEvent(20081010, 4705760, 250001402, 25000002); // Curse of Vitality
    InitializeCommonEvent(20081010, 4705760, 250001602, 25000006); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4705760, 250001202, 25000008); // Curse of Frailty
    
    // Covenants
    InitializeCommonEvent(20081020, 4705760, 160100400, 160100403); // Company of Champions
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25008100)
    InitializeEvent(0, 14700000, 0); // Arena
    
    // Trial of Glory
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25008102)
    InitializeEvent(0, 14700100, 0);
    
    SetEventFlag(25008100, OFF); // Trial Warp flag
    SetEventFlag(25008101, OFF); // Trial Warp flag
    SetEventFlag(25008102, OFF); // Trial Warp flag
    
    // Anti-climb
    InitializeCommonEvent(20021000, 10000, 4704600, 4704820, 525312, 220);
});

// Arena Setup
Event(14700000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    
    // Duel
    Label0();
    InitializeCommonEvent(20005920, 0, 14705300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14705300);
    InitializeCommonEvent(20005941, 14705300);
    EndUnconditionally(EventEndType.End);
    
    // 2-P Brawl
    Label1();
    InitializeCommonEvent(20005920, 1, 14705300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    
    // 4-P Brawl
    Label2();
    InitializeCommonEvent(20005920, 2, 14705300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    
    // 6-P Brawl
    Label3();
    InitializeCommonEvent(20005920, 3, 14705300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    
    // 2v3 Brawl
    Label4();
    InitializeCommonEvent(20005920, 4, 14705300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    
    // 3v3 Brawl
    Label5();
    InitializeCommonEvent(20005920, 5, 14705300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    
    Label9();
    InitializeCommonEvent(20005940, 14705300);
});

// Setup
Event(14700010, Default, function() {
    SetMapCeremony(40, 0, 0);
    
    // Disable Enemies
    ChangeCharacterEnableState(4700500, Disabled);
    SetCharacterAIState(4700500, Disabled);
    SetCharacterGravity(4700500, Disabled);
    SetCharacterAnimationState(4700500, Disabled);
    
    ChangeCharacterEnableState(4700510, Disabled);
    SetCharacterAIState(4700510, Disabled);
    SetCharacterGravity(4700510, Disabled);
    SetCharacterAnimationState(4700510, Disabled);
    
    ChangeCharacterEnableState(4700520, Disabled);
    SetCharacterAIState(4700520, Disabled);
    SetCharacterGravity(4700520, Disabled);
    SetCharacterAnimationState(4700520, Disabled);
    
    ChangeCharacterEnableState(4700530, Disabled);
    SetCharacterAIState(4700530, Disabled);
    SetCharacterGravity(4700530, Disabled);
    SetCharacterAnimationState(4700530, Disabled);
    
    ChangeCharacterEnableState(4700540, Disabled);
    SetCharacterAIState(4700540, Disabled);
    SetCharacterGravity(4700540, Disabled);
    SetCharacterAnimationState(4700540, Disabled);
    
    // Sounds
    ChangeCharacterEnableState(4700600, Disabled);
    SetCharacterAIState(4700600, Disabled);
    SetCharacterGravity(4700600, Disabled);
    SetCharacterAnimationState(4700600, Disabled);
    
    ChangeCharacterEnableState(4700610, Disabled);
    SetCharacterAIState(4700610, Disabled);
    SetCharacterGravity(4700610, Disabled);
    SetCharacterAnimationState(4700610, Disabled);
});

// Trial of Glory
Event(14700100, Default, function() {
    WaitFixedTimeSeconds(10.0);
    
    // Frenzied Guardian: 4700500
    InitializeEvent(0, 14700110, 4700500, 207000);

    IfCharacterHPRatio(MAIN, 4700500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    InitializeEvent(0, 14700120, 4700500, 800501000);
    
    WaitFixedTimeSeconds(12.0);
    
    // Consumed Beast: 4700510
    InitializeEvent(1, 14700110, 4700510, 207010);

    IfCharacterHPRatio(MAIN, 4700510, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    InitializeEvent(1, 14700120, 4700510, 800501010);
    
    WaitFixedTimeSeconds(12.0);
    
    // Frigid Assassin: 4700520
    InitializeEvent(2, 14700110, 4700520, 207020);

    IfCharacterHPRatio(MAIN, 4700520, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    InitializeEvent(2, 14700120, 4700520, 800501020);
    
    WaitFixedTimeSeconds(12.0);
    
    // The Fallen Knight: 4700540
    InitializeEvent(3, 14700110, 4700540, 207040); 
    
    IfCharacterHPRatio(MAIN, 4700540, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    InitializeEvent(3, 14700120, 4700540, 800501030);
    
    WaitFixedTimeSeconds(12.0);
    
    // Beast from Below: 4700530
    InitializeEvent(4, 14700110, 4700530, 207030);
    
    IfCharacterHPRatio(MAIN, 4700530, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    InitializeEvent(4, 14700120, 4700530, 800501040);
    
    WaitFixedTimeSeconds(12.0);

    WarpPlayer(40, 0, 4000970);
});

// Boss Start
Event(14700110, Default, function(X0_4, X4_4) {
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 4704500, -1, X0_4);
    
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
});

// Boss End
Event(14700120, Default, function(X0_4, X4_4) {
    WaitFixedTimeSeconds(10.0);
    DisplayBossHealthBar(Disabled, X0_4, 0, 207000);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    
    AwardItemsIncludingClients(X4_4);
});
