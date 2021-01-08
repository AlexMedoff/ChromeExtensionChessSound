# ChromeExtensionChessSound

Welcome! This is a personal project of mine that was meant to combine my interests in coding, chess, and music!

**Objective**
Being an avid chess player, I have always seen beauty in the game, and I wondered whether there were
a way to capture that beauty with music. This extension for the Google Chrome web browser does exactly that.
Once added to chrome, this application can be enabled on the popular online chess website lichess.org so that
musical chords are added to gameplay.

**How Does it Work**
When a player initiates a game on lichess.org, my JavaScript code observes the board embedded in the web-page,
and when a player moves a piece, the program obtains information (which piece moved, which square did move to,
which square did it move from, is it taking a piece, is it delivering a check or checkmate, etc...). Having
obtained all those different variables about the move, the program uses a series of conditionals in order
to determine the "quality" or "mood" of the move (for example, a "mood" could be aggressive, defensive,
winning, losing, waiting, etc...). I associated all of these "moods" with a particular type of musical chord,
trying my best to ensure that the unique sound of the chord would properly reflect the feeling of the game.
So, for example, if the player takes an opponent's piece, they will hear a happy major triad, but if their
opponent takes one of their pieces, a minor triad will sound to reflect anger or sadness.
