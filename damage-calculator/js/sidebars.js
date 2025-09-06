var CURRENT_SIDEBARS = [];
//left and right sidebar names used in ap_calc.js and setdex_custom.js to make sure the user can't delete or add any sets to the sidebar without using the sidebar buttons
//separated in case there are any specific checks that require individually checking each side added in the future
var LEFT_SIDEBAR_NAMES = [
    'Left Sidebar Slot 1',
    'Left Sidebar Slot 2',
    'Left Sidebar Slot 3',
    'Left Sidebar Slot 4',
    'Left Sidebar Slot 5',
    'Left Sidebar Slot 6',
    'Left Sidebar Slot 7',
    'Left Sidebar Slot 8',
    'Left Sidebar Slot 9',
    'Left Sidebar Slot 10',
    'Left Sidebar Slot 11',
    'Left Sidebar Slot 12',
    'Left Sidebar Slot 13',
    'Left Sidebar Slot 14',
    'Left Sidebar Slot 15',
    'Left Sidebar Slot 16',
    'Left Sidebar Slot 17',
    'Left Sidebar Slot 18',
    'Left Sidebar Slot 19',
    'Left Sidebar Slot 20',
    'Left Sidebar Slot 21',
    'Left Sidebar Slot 22',
    'Left Sidebar Slot 23',
    'Left Sidebar Slot 24',
    'Left Sidebar Slot 25',
    'Left Sidebar Slot 26',
    'Left Sidebar Slot 27',
    'Left Sidebar Slot 28',
    'Left Sidebar Slot 29',
    'Left Sidebar Slot 30',
    'Left Sidebar Slot 31',
    'Left Sidebar Slot 32',
    'Left Sidebar Slot 33',
    'Left Sidebar Slot 34',
    'Left Sidebar Slot 35',
    'Left Sidebar Slot 36',
    'Left Sidebar Slot 37',
    'Left Sidebar Slot 38',
    'Left Sidebar Slot 39',
    'Left Sidebar Slot 40',
    'Left Sidebar Slot 41',
    'Left Sidebar Slot 42',
    'Left Sidebar Slot 43',
    'Left Sidebar Slot 44',
    'Left Sidebar Slot 45',
    'Left Sidebar Slot 46',
    'Left Sidebar Slot 47',
    'Left Sidebar Slot 48',
];
var RIGHT_SIDEBAR_NAMES = [
    'Right Sidebar Slot 1',
    'Right Sidebar Slot 2',
    'Right Sidebar Slot 3',
    'Right Sidebar Slot 4',
    'Right Sidebar Slot 5',
    'Right Sidebar Slot 6',
    'Right Sidebar Slot 7',
    'Right Sidebar Slot 8',
    'Right Sidebar Slot 9',
    'Right Sidebar Slot 10',
    'Right Sidebar Slot 11',
    'Right Sidebar Slot 12',
    'Right Sidebar Slot 13',
    'Right Sidebar Slot 14',
    'Right Sidebar Slot 15',
    'Right Sidebar Slot 16',
    'Right Sidebar Slot 17',
    'Right Sidebar Slot 18',
    'Right Sidebar Slot 19',
    'Right Sidebar Slot 20',
    'Right Sidebar Slot 21',
    'Right Sidebar Slot 22',
    'Right Sidebar Slot 23',
    'Right Sidebar Slot 24',
    'Right Sidebar Slot 25',
    'Right Sidebar Slot 26',
    'Right Sidebar Slot 27',
    'Right Sidebar Slot 28',
    'Right Sidebar Slot 29',
    'Right Sidebar Slot 30',
    'Right Sidebar Slot 31',
    'Right Sidebar Slot 32',
    'Right Sidebar Slot 33',
    'Right Sidebar Slot 34',
    'Right Sidebar Slot 35',
    'Right Sidebar Slot 36',
    'Right Sidebar Slot 37',
    'Right Sidebar Slot 38',
    'Right Sidebar Slot 39',
    'Right Sidebar Slot 40',
    'Right Sidebar Slot 41',
    'Right Sidebar Slot 42',
    'Right Sidebar Slot 43',
    'Right Sidebar Slot 44',
    'Right Sidebar Slot 45',
    'Right Sidebar Slot 46',
    'Right Sidebar Slot 47',
    'Right Sidebar Slot 48',
];

function addSidebarSlot(pnum) {
    var fullSetName = $('#p' + pnum + ' input.set-selector').val();
    var displayName = fullSetName.substring(0, fullSetName.indexOf(' ('));
    CURRENT_SIDEBARS[pnum - 1].push(displayName);
    localStorage['g' + gen + '_sidebars'] = JSON.stringify(CURRENT_SIDEBARS);
    var side = pnum == 1 ? 'Left' : pnum == 2 ? 'Right' : '';
    var teamnum = CURRENT_SIDEBARS[pnum - 1].length;
    var spreadName = side + ' Sidebar Slot ' + teamnum;
    //save custom set to calc
    savecalc(new Pokemon($('#p' + pnum)), spreadName, '#p' + pnum, displayName);
    side = pnum == 1 ? 'l' : pnum == 2 ? 'r' : '';
    var pID = '#pkmn' + side.toUpperCase() + teamnum;
    $(pID).prop('title', displayName);
    getSidebarImg(pID + 'I', displayName);
    $('#' + side + teamnum).show();
    checkVisibleButtons(pnum);
}

function editSidebarSlot(pnum, teamnum) {
    var fullSetName = $('#p' + pnum + ' input.set-selector').val();
    var displayName = fullSetName.substring(0, fullSetName.indexOf(' ('));
    var side = pnum == 1 ? 'Left' : pnum == 2 ? 'Right' : '';
    var spreadName = side + ' Sidebar Slot ' + teamnum;
    deleteSet(CURRENT_SIDEBARS[pnum - 1][teamnum - 1], spreadName);
    CURRENT_SIDEBARS[pnum - 1][teamnum - 1] = displayName;
    localStorage['g' + gen + '_sidebars'] = JSON.stringify(CURRENT_SIDEBARS);
    savecalc(new Pokemon($('#p' + pnum)), spreadName, '#p' + pnum, displayName);
    var pID = '#pkmn' + (pnum == 1 ? 'L' : pnum == 2 ? 'R' : '') + teamnum;
    $(pID).prop('title', displayName);
    getSidebarImg(pID + 'I', displayName);
}

function removeSidebarSlot(pnum, teamnum) {
    var monName = CURRENT_SIDEBARS[pnum - 1][teamnum - 1];
    var side = pnum == 1 ? 'Left' : pnum == 2 ? 'Right' : '';
    var spreadName = side + ' Sidebar Slot ' + teamnum;
    CURRENT_SIDEBARS[pnum - 1].splice(teamnum - 1, 1);
    localStorage['g' + gen + '_sidebars'] = JSON.stringify(CURRENT_SIDEBARS);
    $('#' + (pnum == 1 ? 'l' : pnum == 2 ? 'r' : '') + (CURRENT_SIDEBARS[pnum - 1].length + 1)).hide();
    deleteSet(monName, spreadName);
    shiftSidebar(pnum);
    checkVisibleButtons(pnum);
    reloadSidebar(pnum);
}

function loadSidebar() {
    var side, pID, displayName, teamslot;
    if (localStorage['g' + gen + '_sidebars']) CURRENT_SIDEBARS = JSON.parse(localStorage['g' + gen + '_sidebars']);
    else CURRENT_SIDEBARS = [[], []];
    for (var i = 0; i < CURRENT_SIDEBARS.length; i++) {
        side = i == 0 ? 'l' : i == 1 ? 'r' : '';
        pID = '#pkmn' + side.toUpperCase();
        for (var j = 0; j < 48; j++) {
            if (j < CURRENT_SIDEBARS[i].length) {
                displayName = CURRENT_SIDEBARS[i][j];
                teamslot = pID + (j + 1);
                $(teamslot).prop('title', displayName);
                getSidebarImg(teamslot + 'I', displayName);
                $('#' + side + (j + 1)).show();
            } else $('#' + side + (j + 1)).hide();
        }
        checkVisibleButtons(i + 1);
    }
}

function reloadSidebar(pnum) {
    var side = pnum == 1 ? 'l' : pnum == 2 ? 'r' : '';
    var pID = '#pkmn' + side.toUpperCase();
    var displayName, teamslot;
    for (var i = 0; i < CURRENT_SIDEBARS[pnum - 1].length; i++) {
        displayName = CURRENT_SIDEBARS[pnum - 1][i];
        teamslot = pID + (i + 1);
        $(teamslot).prop('title', displayName);
        getSidebarImg(teamslot + 'I', displayName);
        $('#' + side + (i + 1)).show();
    }
}

function getSidebarImg(teamslotI, displayName) {
    for (var i = 0; i < calcToShowdownFormes.length; i++) {
        if (displayName == calcToShowdownFormes[i][1]) displayName = calcToShowdownFormes[i][0];
    }
    if (['Urshifu', 'Urshifu-Rapid-Strike'].indexOf(displayName) == -1) {
        displayName = displayName.replace(' ', '-').toLowerCase();
        $(teamslotI).prop('src', 'https://www.smogon.com/forums/media/minisprites/' + displayName + '.png');
    } else if (displayName == 'Urshifu') {
        $(teamslotI).prop('src', 'image_res/urshifu-single.png');
    } else if (displayName == 'Urshifu-Rapid-Strike') {
        $(teamslotI).prop('src', 'image_res/urshifu-rapid.png');
    }
}

function loadPreset(p, fullSetName) {
    $(p + ' .set-selector').val(fullSetName);
    $(p + ' .set-selector').change();
    $(p + ' .set-selector')
        .find('.select2-chosen')
        .text(fullSetName); //used when the dropdown list doesn't contain the set it's loading
}

function loadSidebarSlot(pnum, teamnum) {
    var speciesName = CURRENT_SIDEBARS[pnum - 1][teamnum - 1];
    if (speciesName in pokedex) {
        var slotName = speciesName + (pnum == 1 ? ' (Left' : pnum == 2 ? ' (Right' : '') + ' Sidebar Slot ' + teamnum + ')';
        var p = '#p' + pnum;
        loadPreset(p, slotName);
    } else {
        alert('This Pokemon is not available in this mode. Switch to National Dex mode to select this Pokemon.');
    }
}

function shiftSidebar(pnum) {
    //console.log(ALL_SETDEX_CUSTOM[gen]);
    var sidebar = CURRENT_SIDEBARS[pnum - 1];
    var tempHold = [{}, {}, {}, {}, {}, {}];
    var desyncStart = -1;
    var side = pnum == 1 ? 'Left' : pnum == 2 ? 'Right' : '';
    for (var i = 0; i < sidebar.length; i++) {
        var tempMonSets = ALL_SETDEX_CUSTOM[gen][sidebar[i]];
        if (!(side + ' Sidebar Slot ' + (i + 1) in tempMonSets)) {
            desyncStart = i;
            break;
        }
    }
    if (desyncStart != -1) {
        for (var i = desyncStart; i < sidebar.length; i++) {
            tempHold[i] = ALL_SETDEX_CUSTOM[gen][sidebar[i]][side + ' Sidebar Slot ' + (i + 2)];
        }
        for (var i = desyncStart; i < sidebar.length; i++) {
            ALL_SETDEX_CUSTOM[gen][sidebar[i]][side + ' Sidebar Slot ' + (i + 1)] = tempHold[i];
            deleteSet(sidebar[i], side + ' Sidebar Slot ' + (i + 2));
        }
    }
    //console.log(ALL_SETDEX_CUSTOM[gen]);
}

function removeSidebarTeam(pnum) {
    for (var i = CURRENT_SIDEBARS[pnum - 1].length; i > 0; i--) {
        removeSidebarSlot(pnum, i);
    }
}

function exportSidebarTeam(pnum) {
    var monName = '',
        setdexName = '',
        tempSet;
    var teamExportText = '';
    for (var i = 0; i < CURRENT_SIDEBARS[pnum - 1].length; i++) {
        monName = CURRENT_SIDEBARS[pnum - 1][i];
        setdexName = pnum == 1 ? LEFT_SIDEBAR_NAMES[i] : RIGHT_SIDEBAR_NAMES[i];
        tempSet = setdex[monName][setdexName];
        tempSet.name = monName;
        teamExportText += exportset(tempSet) + (i != CURRENT_SIDEBARS[pnum - 1].length - 1 ? '\n' : '');
    }
    Clipboard_CopyTo(teamExportText);
}

function clearSidebar(pnum) {
    if (confirm('Delete the ' + (pnum == 1 ? 'left' : pnum == 2 ? 'right' : 'ERROR') + ' team?')) removeSidebarTeam(pnum);
}

function checkVisibleButtons(pnum) {
    var side = pnum == 1 ? 'L' : pnum == 2 ? 'R' : '';
    var teamnum = CURRENT_SIDEBARS[pnum - 1].length;

    if (teamnum == 48) $('#sb' + side).hide();
    else $('#sb' + side).show();

    if (teamnum == 0) $('#ed' + side).hide();
    else $('#ed' + side).show();
}
