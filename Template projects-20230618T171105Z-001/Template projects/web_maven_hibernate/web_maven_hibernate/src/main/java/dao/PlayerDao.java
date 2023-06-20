package dao;

import pojos.Player;

public interface PlayerDao {
  String addPlayer(Player p,Long teamId);
}
