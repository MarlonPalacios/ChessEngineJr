# Chess Bot & Web Engine

A modular chess engine featuring a high-performance, responsive web interface coupled with a game-theoretic evaluation and search engine.

---

##  Project Status: Work in Progress (WIP)

- [x] **Frontend:** Integration of the visual board layer (Chessground) and client-side rule validation (chess.js).
- [ ] **API / Protocol:** Communication channel (REST / WebSocket) between the web client and the engine.
- [ ] **Engine Core:** Board representation and move generator (Bitboards / Perft validation).
- [ ] **AI & Search:** Minimax search algorithm with Alpha-Beta pruning and positional evaluation.

---

##  System Architecture

The project enforces a strict separation of concerns between user interaction, rule enforcement, and computational decision-making:

```text
[ Web Client (GUI) ]
   ├── Chessground (Hardware-accelerated SVG rendering at 60 FPS)
   └── chess.js (Client-side validation, turn checking, and FEN generation)
           │
           │  (HTTP / WebSocket payload carrying FEN state)
           ▼
[ Engine Backend ]
   ├── API / Protocol Layer (FastAPI / Crow C++)
   └── Search Engine
         ├── Internal Board Representation (Bitboards)
         ├── Legal Move Generator
         ├── Minimax + Alpha-Beta Pruning
         └── Positional Evaluation (Piece-Square Tables)
```

---

##  Tech Stack

- **Frontend:**
  - [Chessground](https://github.com/lichess-org/chessground) (Open-source visual board developed by Lichess).
  - [chess.js](https://github.com/jhlywa/chess.js) (Rule enforcement, move validation, and FEN parsing).
  - Vanilla JavaScript / Vite / CSS3.

---

##  Getting Started (Local Setup)

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher).
- `npm` installed.

### GUI Installation and Development Server

1. Clone the repository:
   ```bash
   git clone https://github.com/MarlonPalacios/ChessEngineJr
   cd ChessEngineJr

   ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd gui
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the local address displayed in your terminal (typically `http://localhost:5173`) in your browser.

---

