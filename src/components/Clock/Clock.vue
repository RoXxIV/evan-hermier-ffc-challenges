<template>
  <section>
    <h2 class="custom-H2">Build a 25 + 5 Clock</h2>
    <div id="pomodoro">
      <!--Timers-->
      <div id="timers">
        <transition name="fade">
          <div class="center-timers" v-if="!breakState">
            <h3 id="timer-label">Session</h3>
            <span id="time-left">{{
              displayConvertedTime(sessionTimeLeft)
            }}</span>
          </div>

          <div class="center-timers" v-else>
            <h3 id="timer-break-label">Break</h3>
            <span id="time-break-left">{{
              displayConvertedTime(breakTimeLeft)
            }}</span>
          </div>
        </transition>
      </div>
      <nav>
        <!--Break-->
        <div id="break-nav">
          <h4 id="break-label">Break Length</h4>
          <div>
            <button
              id="break-decrement"
              @click="breakCtrl > 60 ? (breakCtrl -= 60) : false"
            >
              -
            </button>
            <span id="break-length">{{ displayConvertedTime(breakCtrl) }}</span>
            <button
              id="break-increment"
              @click="breakCtrl <= 3540 ? (breakCtrl += 60) : false"
            >
              +
            </button>
          </div>
        </div>
        <!--Session-->
        <div id="session-nav">
          <h4 id="session-label">Session Length</h4>
          <div>
            <button
              id="session-decrement"
              @click="sessionCtrl > 60 ? (sessionCtrl -= 60) : false"
            >
              -
            </button>
            <span id="session-length">{{
              displayConvertedTime(sessionCtrl)
            }}</span>
            <button
              id="session-increment"
              @click="sessionCtrl <= 3540 ? (sessionCtrl += 60) : false"
            >
              +
            </button>
          </div>
        </div>
      </nav>

      <!--action-->
      <div id="action">
        <div v-show="!state">
          <button id="start_stop" @click="startPomodoro">Start</button>
        </div>
        <div v-show="state">
          <button id="start_stop" @click="pausePlay">
            {{ !playState ? "play" : "Pause" }}
          </button>
          <button id="reset" @click="reset">Reset</button>
        </div>
      </div>
    </div>
    <div class="link-to-challenge">
      <a
        href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock"
        target="_blank"
        rel="noopener noreferrer"
        >#Challenge</a
      >
    </div>
  </section>
</template>

<script>
var DEFAULT_SESSION = 1500;
var DEFAULT_BREAKS = 300;
var audioPlay = new Audio(
  require("../../assets/audio/mixkit-shaker-bell-alert-599.mp3")
);
var audioBreak = new Audio(
  require("../../assets/audio/mixkit-phone-ring-bell-593.wav")
);
export default {
  name: "clock",
  data() {
    return {
      breakCtrl: DEFAULT_BREAKS,
      sessionCtrl: DEFAULT_SESSION,
      sessionTimeLeft: DEFAULT_SESSION,
      breakTimeLeft: DEFAULT_BREAKS,
      pauseSessionTimeLeft: DEFAULT_SESSION,
      pauseBreakTimeLeft: DEFAULT_BREAKS,
      sessionTimerID: undefined,
      breakTimerID: undefined,
      state: false,
      breakState: false,
      playState: false,
    };
  },
  methods: {
    displayConvertedTime(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    },
    startPomodoro() {
      this.state = true;
      this.breakState = false;
      this.playState = true;
      this.sessionTimeLeft = this.sessionCtrl;
      this.breakTimeLeft = this.breakCtrl;
      audioPlay.play();
      this.sessionTimer();
    },
    reset() {
      this.state = false;
      this.breakState = false;
      clearInterval(this.sessionTimerID);
      clearInterval(this.breakTimerID);
      this.sessionTimeLeft = this.sessionCtrl;
      this.breakTimeLeft = this.breakCtrl;
    },
    pausePlay() {
      if (this.playState) {
        this.playState = false;
        clearInterval(this.sessionTimerID);
        clearInterval(this.breakTimerID);
      } else {
        this.playState = true;
        if (this.sessionTimeLeft === 0) {
          this.breakTimer();
        } else {
          this.sessionTimer();
        }
      }
    },
    sessionTimer() {
      this.sessionTimerID = setInterval(() => {
        this.sessionTimeLeft--;
        if (this.sessionTimeLeft === 0) {
          clearInterval(this.sessionTimerID);
          audioBreak.play();
          this.breakTimer();
        }
      }, 1000);
    },
    breakTimer() {
      this.breakState = true;
      this.breakTimerID = setInterval(() => {
        this.breakTimeLeft--;
        if (this.breakTimeLeft === 0) {
          clearInterval(this.breakTimerID);
          this.startPomodoro();
        }
      }, 1000);
    },
  },
  beforeUnmount() {
    clearInterval(this.sessionTimerID);
    clearInterval(this.breakTimerID);
  },
};
</script>

<style scoped>
#timers {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 30px auto 0px auto;
  border-radius: 50%;
  border: 2px solid var(--light);
  text-align: center;
  font-size: 1.3em;
}

nav {
  display: flex;
  justify-content: space-around;
}
#session-nav div,
#break-nav div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav h4 {
  font-size: 1.2em;
}
nav button {
  width: 40px;
  height: 40px;
  border: none;
  font-size: 1.2em;
  border-radius: 5px;
  background: var(--light);
  color: var(--dark);
  cursor: pointer;
}

nav span {
  margin: 0px 5px 0px 5px;
}
#action {
  text-align: center;
  margin: 50px auto 30px auto;
}
#action button {
  width: 110px;
  margin: 10px;
  padding: 5px 15px;
  font-size: 1.5em;
  letter-spacing: 1.5px;
  border: none;
  border-radius: 5px;
  background: var(--light);
  color: var(--dark);
  cursor: pointer;
}

/***___Media Queries___***/
/***___Tablet, Moins de 992px___***/
@media (max-width: 991.98px) {
}
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  nav {
    flex-direction: column;
  }
  nav h4 {
    text-align: center;
  }
}
</style>
