/*******************************************************************************
*the atomic unit of action: roll one d10 for each dot in a trait or combination*
*of traits then compare the numbers with the difficulty of the action. All dice*
*that exceed that number are "successes". Each 1 reduces the number of         *
*successes                                                                     *
*******************************************************************************/

/*******************************************************************************
*                              DEGREES OF SUCCESS                              *
*                                                                              *
*                       DICE ROLLED      CHANCE OF SUCCESS                     *
*                       X                Abyssmal/No Chance                    *
*                       1                Poor/Miniscle Chance                  *         
*                       2                Average/Middling Chance               *        
*                       3                Good/Decent Chance                    *        
*                       4                Exceptional/Good Chance               *        
*                       5                Superb/Rather Good Chance             *        
*                       6                Legendary/ Really Good Chance         *        
*******************************************************************************/

/*
DIFFICULTY      EXAMPLE

3               Trivial (hopping a creek)
4               Easy (cooking a meal)
5               Straightforward (changing the oil in your car)
6               Standard (punching someone in the face)
7               Challenging (comprehending a book by Crowley)
8               Difficult (playing all of '2112' on your guitar)
9               Extreme (sealing a million dollar deal with reluctant folks)

DEGREES OF SUCCESS
1               Marginal (getting a stranger to flirt with you)
2               Moderate (getting a stranger to give you their number)
3               Complete (getting a stranger to agree to a date)
4               Exceptional (getting a stranger to go on a date immediately)
5 or more       Phenomenal (going home with a stranger)


MODIFIERS
difficulty may be decreased or increased by up to 3 based on especially
favorable or unfavorable circumstances.

dice may also be added or taken away from the pool for especially favorable or
unfavorable internal circumstances

THRESHOLDS
A task may be so difficult as to require multiple successes. Instead of rolling
against an increased difficulty (as opposed to the default of 6) you add a die
for each diff beyond the default. For example, a diff 10 roll could also be
expressed as a diff 9 roll that requires 2 successes rather than just 1 to
succeed at all.

For every level of a threshold, that threshold removes one success rolled. A
threshold of one success removes one success. A threshold of two removes two
successes, etc.

A threshold rule can also a reflect a relatively easy task that requires a lot
of work ie. difficulty 3, 15 successes is an easy but involved task (such as
doing the dishes). You could accumulate the successes over multiple turns.

Threshold die removal occurs ***before*** successes are taken away by 1s for the
purposes of determining botches.

ROLL VALUES
1: -1 to successes, potential botch
2-5: failure
6-9: 1 success
10: success + 1 extra roll (with specialty) (DW: for characters and bosses -
always extra roll, 1s on this roll does not count against)

ACTION TYPES

SIMPLE ACTION
A straightforward task that requires a single success and takes a single turn

REFLEXIVE ACTION
An action that takes no real time or deliberate effort to perform. It is
essentially instant and automatic, like seeing a mountain in front of you as
opposed to solving Where's Waldo. It usually does not require a roll with the
most common exception being soak rolls.

MULTIPLE ACTIONS
To perform several actions in a single turn first figure out the dice pools you
would normally use for those actions, then use the lowest dice ppol among
them. 

Ex: one task gives you a pool of 6 and another gives you a pool of 4. You
therefore have 4 dice to work with. You can then divide those 4 dice however you
like between the two actions... 2 and 2, 3 and 1, etc.

EXTENDED ACTIONS
As mentioned in thresholds, you can require a certain number of rolls for a task
and accumulate those successes over multiple rolls spread out over multiple
periods of time. In a relaxed situation, any number of rolls can be done and
each one required just adds to the time needed. Where time is pressing, there
can be a limited number of rolls the character is allowed to try and hit the
threshold.

FAILING OR BOTCHING EXTENDED ACTIONS
A failure represents a failed roll. A botch generally represents a complete and
irrecoverable loss of progress. (using willpower is generally a good idea for
difficult or important extended rolls)

COMPLEMENTARY ROLLS (OPTIONAL)
A player can make a roll with one task to assist the performance of another. A
successful complementary roll reduces the difficulty of the other roll by 1 for
each success past the first, maximum -3.

RESISTED ACTIONS
When a character takes an action that is resisted by another character, they
both roll. The resister's successes subtract from the successes of the character
making an attempt. 

EX. Sneaky is trying to get past Guardy. Sneaky rolls dex + stealth vs Guardy's
per + alertness. If Sneaky gets 3 successes and Guardy gets 2, Sneaky gets 1
total success and wins. If they both get 3, Sneaky fails. The subtraction
happens after botch determination.

The difficulty is generally 6 but if the task is easier or harder for one of the
parties, the difficulties are adjusted accordingly. (higher difficulty to spot
someone at night or lower difficulty to be unheard in a loud room, etc.) 

EXTENDED AND RESISTED ACTIONS
Two characters engaged in an sustained and limited contest (a race, chess game,
wrestling match, etc). The initiating character must accumulate a certain number
of successes and the opposing player must reduce those successes. (DW: positive
and negative success thresholds can be used ie. at +5 successes, white wins
the chess game, -5 successes, black wins)

/*******************************ACTION SUMMARIES*******************************\
*   Action          Description         Example                                *
*   Reflexive       No Roll             spending willpower, soak, saying a word*
*                                                                              *
*   Simple          one roll, success   throwing a punch, looking for          *
*                   needed              something, impressing someone          *
*                                                                              *
*   Multiple        split lowest dice   pulling out a wrench and hitting       *
*                   pool between all    someone with it, driving and shooting  *
*                                                                              *
*   Extended        several rolls with  fixing a computer, conducting a ritual *
*                   a success threshold                                        *
*                                                                              *
*   Resisted        opposing players    grabbing an angry cat, impressing a    *
*                   roll against each   potential client                       *
*                   other                                                      *
*                                                                              *
*   Extended and    several opposed     bathing angry cat, arguing online      *
*   Resisted        rolls                                                      *
\******************************************************************************/

/*
TEAMWORK
Characters working together (mostly on extended actions) can combine their total
successes in order to meet a threshold. The success totals for each individual
are calculated, then pooled together. A botch by any individual generally ruins
the whole attempt.

FAILURE
0 total successes means the action failed, period. 

TRYING AGAIN
When trying a failed action again, generally add +1 to the difficulty for each
previous failure if the failure has any impact on future tries (social
interactions, frustration, time pressure, etc). This is not applied if the
player attempts a different tactic or approach to tackling the
challenge. (ex incorporating a mistake in a musical performance into an
improvisational flourish)

BOTCH
A botch is a catastrophic failure with game-altering repercussions. A roll of a
1 takes away the highest value success you've gotten on a roll. If you have more
1s than successes, you've botched. Like extra successes, extra 1s increase the
severity. A single botch may be an embarrassment or give a significant advantage
to an opponent. A triple botch may be fatal.

BOTCHES AND THRESHOLDS
A player may want to take their time with an especially difficult task, trading
in a high difficulty for an extended roll with a success threshold. This
tradeoff greatly reduces the odds of a catastrophic failure.

SUCCESS

AUTOMATIC SUCCESS
Use this for trivial tasks where a single success is all that's necessary and
there is no resistance

SPENDING WILLPOWER
A character may spend one point of willpower per turn to gain an automatic
success. This success cannot be canceled out by a one.




                            INITIATIVE AND MOVEMENT

ACTION TURNS 
    INITIATIVE
        Each character rolls initiative (one d10 + dex + wit). Characters then
        act highest to lowest. In the case of a tie, the character wtih the
        highest 'initiative rating' (dex + wit). If that's tied, favor the
        character with the highest wit. If that's tied, favor the character with
        the highest dex. (Optionally rolled once at the start of a sequence or
        once per turn)

        oWoD: Characters declare their actions lowest init to highest init, then
        actions resolve highest to lowest

        DW: ties vs baddies go to players except in the case of bosses. bosses
        win ties.

    ACTION
        Characters choose what they're going to do
        
    RESOLUTION
        The chosen actions resolve. roll the dice.


AUTOMATIC FEATS - no roll needed in normal circumstances
    getting to your feet
    normal movement
    normal speech, writing, or texting
    grabbing tools or weapons

                                    MOVEMENT

/*********************************MOVEMENT RATES*******************************\
*                                                                              *
*       Move        Distance Per Turn                                          *
*       Walk        7 yards                                                    *
*       Jog         12 + Dexterity Yards                                       *
*       Run         20 + (3 * Dexterity) Yards                                 *
*       Swim        8 + dex (unskilled) or 12 + dex (skilled) yards            *
*       Fly         10 to 20 yards                                             *
*       Climb       10 feet(3.3 yards) per success normally; 15-20 under ideal *
*                   conditions; 5 feet per success under poor conditions       *
*                                                                              *
\******************************************************************************/

/*
A character can move half of their normal running speed in a single turn and
still act without taking a penalty. Beyond that, they have to reduce their die
pool for that second action by one for every yard moved.

A character can move at full speed for roughly 10 turns for every point of
stamina they possess.

**health penalty** Characters who have reached the injured Health Level or lower
move at half their normal rate.

High intensity movement (jumping, swimming, sprinting) can cut the normal
movement duration by half. It can be further cut due to extreme circumstances
(swiming through heavy waves, dodging gunfire, outrunning a bear). To push
beyond limits, the character may roll Stamina or Willpower (whichever is
greater). A botch on this roll and the character trips, their body gives out, or
some other movement stopping effect. 

                                 DRAMATIC FEATS
/******************************************************************************\
* ACTION        TRAITS              DIFF    DESCRIPTION   

                                 Physical Feats
* Chase         dex + athletics     6       resisted * extended
  Climbing      dex + athletics     v *1    extended; 1 success = 5 ft
  Demolition    str + athletics     v       extended; 1 roll per strike
  Flow-Arts     dex + athletics     5-9     standard; 1 roll per performance
  Foraging      per + survival      7-9     extended; 1 roll = 2-5 hours
  Hunting       per + survival*2    7-9     extended; 1 roll = 1-3 hours
  Jumping       str                 3       standard; up 2'/success
                                            across 4'/success
  Lifting       str or will         v       see Feats of Strength chart
  Resisting     will or sta         +3 (v)  standard or resisted; see torture
  Sneaking      dex + stealth       *3      standard; see spotting sneak
  Swimming      sta + athletics     v       extended; 1 success = 10 minutes
                or swimming                 for speed see movement rates

                                Art and Science
 Computer       int + computers     v       standard or extended
 Craftwork      dex + crafts *4     v       extended; 1 roll = a day, week,
                                            month, depending on task
 Design         int + crafts *4     v       extended
 Evaluation     per + art or crafts v       extended
 Gamesmanship   per + subterfuge*5  v       resisted
 Hacking        int or wit +        *6      extended and resisted
                computer
 Invention      int + craft or      v       extended
                technology  
 Jury-Rigging   wit + tech          v       standard
 Performance    man + art*7         v       standard
 Programming    int + comptuer      *6      extended
 Repair         int + tech          v       extended
 Research       int + research*8    *9      extended
 Surfing  (web) per + computer      *9      extended
 Understanding  int + enigmas       v       standard
                or esoterica
                         Social Occasions And Intrigue
 Cryptography   int + knowledge*10  8       extended
 Deception*11   man + subterfuge    *12     resisted
 Eloquence*11   cha + expression    7       standard
 Facedowwn*11   cha + intimidation  8       resisted, target's willpower
 Fake-Out       man + streetwise    *12     standard
 Gossip*11      man + subterfuge    7       standard
 Impressing*11  cha + etiquette     v       standard
 Interpreting   per + empathy       v       standard
 Interogate*11  man + intimidation  6       resisted, target's willpower
 Poisoning      dex + streetwise    *12     standard
 Seduction*11   man + subterfuge or *12     resisted, target's willpower
                seduction
 Spotting Sneak per + stealth       8       resisted; see Sneaking
 Spotting       per + awareness     v       standard
 Supernatural
 Torture*11     man + torture       6       resisted; see Resisting

                                 Transportation
 Driving        dex + drive         *14     standard
 Evasion        dex + transport     *14     resisted*15
                method
 Flight         dex + flying or     *14     standard
                jetpack
 Piloting       dex + wit or        *14     standard
                pilot
 Pursuit        dex + transport     *14     resisted*16; see Evasion
                method
 Riding         dex + riding        *14     standard                
 Sailing        wit + crafts        *14     standard                
                (seamanship)

                                     Notes
#1  Typically 6 but may go up or down depending on circumstances
#2  Int can replace Per, to reflect cunning
#3  Watcher's per + awareness; could also be set by conditions - higher for light
    or open space, lower for darkness or cover
#4  Craft reflects the appropriate Trait; it could also be Art or Knowledge
#5  Or a knowledge trait related to the game. Could also be man + intimidation
    (to bluff); per + intuition (to read opponent); or int + enigmas (to work
    out puzzle).
#6  Depends upon system being hacked; for details se extended computer rules in 
    The Book of Secrets
#7  Man could be replaced by dex, sta, cha, or app, depending on the type of
    performance. Expression, intimidation, or seduction could be used to
    compensate for lack of skill
#8  Research can be replaced by streetwise (for dirt), etiquette (high society),
    computer (for computer searches), or other appropriate knowledge traits
    (esoterica, government, investigation, etc)
#9  Depends on how accessible the information is: 4 = widely available, 6 =
    normally accessible, 8 = hard to find, 9 + threshold = secret, classified,
    or assumed lost
#10 Knowledge reflects the trait necessary to encode or decode the
    information. Typically code traits include Esoterica (appropriate
    specialty), linguistics (appropriate language), science (appropriate
    discipline), or other fields. To crack a code without the appropriate
    information, you might use computer(to access databases) at a +3 diff and
    twice the normal successes needed; cracking the code when you do have the
    information speeds the process considerably. Creating or cracking complex
    codes is an extended activity, with each roll reflecting one day, week, or
    month, depending on the code's complexity. Many modern ciphers cannot be
    decoded without computers, and take days or weeks to unravel even then.
#11 Any social trait works; Cha reflects force of personality, man is obvious,
    and appearance lets you use beauty to your advantage.
#12 Difficulty is observer's wit + subterfuge.
#13 Torturer makes one roll per turn. Each scene of mental torture costs the
    victim one point of temporary willpower.
    Each scene of physical torture cost the victim one health level of bashing
    or lethal damage depending on method; intense torment inflicts two health
    levels per scene). Intense or lethal torture reduces tormenter's difficulty
    by -2. Botched roll gets false information, breaks target's mind, or
    possibly kills target.
#14 Difficulties depend upon travel conditions, from 3 or 4 in calm conditions
    to 9 + threshold under hazardous conditions.
#15 Target may use dex + stealth on foot(wit + stealth to duck behind
    cover). Pursuer's roll is resisted with per + subterfuge, and the pursuers must
    win roll in order to find target.
#16 Pursuer tries to equal or exceed target's successes; target tries to evade
    pursuer. Target begins with a head start between one and four successes. (One
    success = 2 yards on foot, 10 yards in cars, 50 yards in large
    vehicles). Each success by pursuer eliminates one sucess from the target. If
    pursuer matches or exceeds target's successes, pursuer catches up; if target
    more than doubles pursuer's successes, target escapes.
