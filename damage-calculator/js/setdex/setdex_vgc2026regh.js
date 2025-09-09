/**
 * SETDEX_GEN9 に複数ポケモン情報を追加/更新する関数
 *
 * @param {object} setdex - 既存の全体データ (SETDEX_GEN9)
 * @param {object} newData - 追加するポケモン情報 (SETDEX_GEN9と同じ構造)
 */
function addPokemonSets(setdex, newData) {
    for (const pokemon in newData) {
        if (!setdex[pokemon]) {
            // ポケモンが存在しなければ新規作成
            setdex[pokemon] = {};
        }

        for (const setName in newData[pokemon]) {
            // 型を追加（既存なら上書き）
            setdex[pokemon][setName] = newData[pokemon][setName];
        }
    }
}

const SETDEX_ORIGIN = SETDEX_GEN9;

SETDEX_GEN9 = {
    Sneasler: {
        'H165 A200 Seed': {
            level: 50,
            evs: { hp: 76, at: 252, df: 4, sa: 0, sd: 4, sp: 172 },
            nature: 'Adamant',
            ability: 'Unburden',
            tera_type: 'Dark',
            item: 'Psychic Seed',
            moves: ['Close Combat', 'Dire Claw', 'Throat Chop', 'Acrobatics'],
        },
    },
};

addPokemonSets(SETDEX_GEN9, SETDEX_ORIGIN);
