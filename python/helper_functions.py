"""
start position S_0: it specifies the initial state of the game before the very first move
turn(s): a function that tells us which player (agent) is to make its move in the state s
moves(s): a function returning all the moves legal in the state s
result(s, a): the transition model specifying which state we get in by applying action a in the state s
terminal(s): a function that identifies the states in which the game is over
utility(s, p): the utility function assigning a numerical value to player p in terminal state s
"""

import helper_functions
import random
import re

# state = fen
# player = "white" | "black"

def turn(s):
    board = helper_functions.Board(s)
    turn = board.fen().split(' ')[1]

    return "white" if turn == "w" else "black"

def moves(s):
    board = helper_functions.Board(s)
    return list(board.legal_moves)

def result(s, a):
    board = helper_functions.Board(s)
    board.push(a)
    return board.fen()

def terminal(s):
    board = helper_functions.Board(s)
    return board.is_checkmate() or board.is_insufficient_material() or board.is_stalemate()

def utility(s, p):
    def score_list(piecelist):
        val_dict = {'P':1,'N':3,'B':3,'R':5,'Q':9,'K':0}
        total = sum([val_dict[piece] for piece in piecelist])
        return total

    board = helper_functions.Board(s)
    pieces_fen = board.fen().split(' ')[0]
    textb = [c.upper() for c in pieces_fen if (c.isalpha() and c.islower())] # Assuming it really is a list of chars to a list of chars gives a list 
    textw = [c.upper() for c in pieces_fen if (c.isalpha() and c.isupper())] # Assuming it really is a list of chars to a list of chars gives a list 
    scoreb = score_list(textb)
    scorew = score_list(textw)

    if (not board.outcome() is None and board.outcome().winner):
        scorew += 1000
    elif not board.outcome() is None and board.outcome().winner is None:
        pass
    elif not board.outcome() is None and not board.outcome().winner:
        scoreb += 1000

    if p == "white":
        return scorew
    elif p == "black":
        return scoreb
    else:
        return scorew, scoreb