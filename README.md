Multi user dungeon framework for Dischord bot.

(Ok I don't know the first thing about Licences, But This project I have used. Node.Js in conjuntion with Javascript for the code. (Started with at the time 8/21/2017 https://www.youtube.com/user/theadamgaskins incomplete tutorial on Node.js bots)   Visual Studio's IDE, Discrod.js-ommando as the foundation and I have no idea what licenses are required, I do know that Commando.js is under Apache 2.0 and I have implemnted their code, therefore at the verry least anything refrencing commando is under somthing pertaining to a project that uses something under a project using Apache 2.0)

Premise
    Make a Mud that interfaces to Discord and is hosted on the botowners server.

Goals
(T iers are in order from I, essential to III Superfluous)
(Hgher Tiers of object are subject to ommision/modification as the project evolves with time)

1. Implement the Backend of MSQL database planning

    Player object
        TI.   Name 
        TII.  Statistics (HP,MP,LV,EXC)
        TII.  Body Statistics (Head,Chest,Legs,Arms,Rear,Misc) Might have subsets from these.
        TIII. Infection Transmisison states and progressions IE Demon curruption spreading form Hands to Chest
    Map object
        TI. Grid of all rooms, with their room Id's
        TII. Array of things populating the map, ordered by their precidence, highest detrmines the location stack.
        TII. Multiple maps
        TIII Multiple layers.

    Item object            
        TI.   Name, Quantity
        TII.  Weight, Value
        TIII. Equip Slot

    Npc object
        TI. Talk
        TII. Store
        TII. AI
        TIII. Combat Stats and Complex states like Infection

2. Implement MUD suite of commands 

    A Login
        TI.   If there is no Account registered to a UID Make a new account 
        TII.  Add a password system under settings
        TIII. Allow users to mulit account if they put a special parameter in

    B Map
        TI. Displays the map, as it has been updated to the 

    C Move
        TI. Check player location. Check for map boundry. if none, Return error
        TII. Check for objects that have boundry tag. (NPC's other players Exc.)
        TIII. Expend Movment points per turn or some other limit to movemnt

    D Inventory
        TI. Single Use items, Passive bonus items
        TII. Weight, Value
        TII. Equip slot/ related arcatexture
        TIII. Durribility and modifiers IE Dented Poisoned Tainted Sword of swiftness +1

    E Action
        TI. Look (Displays info about the local location)
            TII Look + paramater For looking at the neigboring tiles... IE Look up (to see tile Y+1 of location)
        TI. Get (Picks up all items on floor)
        TII. Talk (Sends PM's to all accounts linked to the channel)
        TIII. *Do* *Target* (A suite of interactios one might do to somthing in the local room)

    F Settings
        TII. Anything folks request
        TIII. Cosmetics like changing what your obligitory '@' sign looks like in colour. 

3. Content Addition

A. Hardcopy Game Assets Folder (Map(s),NPC,Items,Events,)
        TI.  Update            
        TII. Add
        TII. Remove
        TIII.Revert"# DiscordBot-MUD" 
