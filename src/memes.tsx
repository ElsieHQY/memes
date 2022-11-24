class Memes {
  public static instance: Memes = new Memes();
  public static Data: any;
  public static DataLength: number;

  //   public static RandomNumber: number = Math.floor(
  //     Math.random() * Memes.DataLength
  //   );
  // public static DisplayMeme: any[] = [
  //   Memes.Data.data.memes[Memes.RandomNumber],
  // ];

  public async fetchMemes() {
    try {
      const result = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await result.json();
      return (
        (Memes.Data = data.data.memes), (Memes.DataLength = Memes.Data.length)
      );
    } catch (err) {
      console.error(err);
    }
  }

  constructor() {
    this.fetchMemes();
    // Memes.RandomNumber = Math.floor(Math.random() * Memes.DataLength);
    // Memes.DisplayMeme.push(Memes.Data.data.memes[Memes.RandomNumber]);
  }
}
export default Memes;

// class FetchTranslation {
//   public static instance: FetchTranslation = new FetchTranslation();
//   public static fetchResult: FetchTranslation;
//   public static fetchResultKeys: string[];
//
//   public async fetchTrans() {
//     try {
//       const res = await fetch("/translation.json");
//       const data = await res.json();
//       const keys = Object.keys(data);
//       return (
//         (FetchTranslation.fetchResult = data),
//         (FetchTranslation.fetchResultKeys = keys)
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   }
//
//   constructor() {
//     this.fetchTrans();
//   }
// }
